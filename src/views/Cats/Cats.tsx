import { FC, MouseEvent, useEffect, useState } from "react";
import { Button } from "antd";
import { useSearchParams } from "react-router-dom";
import { getRandomCats, getCatById } from "../../api/cats";
import { CatCard, CatModal } from "./components/";
import { Loader, LoaderWrapper } from "../../components/";
import { usePromise } from "../../hooks";
import { Cat, CatsAPIOptions, Status } from "../../types";
import styles from "./styles.module.css";

const randomCatsApiOptions = {
  page: 1,
  limit: 10,
  order: "RAND",
};

const Cats: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCatID = searchParams.get("catID");
  const [catsState, setCatsState] = useState<{
    status: Status;
    cats: Cat[];
  }>({ status: "loading", cats: [] });
  const [currentPage, setCurrentPage] = useState(randomCatsApiOptions.page);
  const [selectedCat, setSelectedCat] = useState<Cat | null>(null);
  const { data: images } = usePromise(getRandomCats, randomCatsApiOptions);

  useEffect(() => {
    if (images) {
      setCatsState((state) => ({ status: "success", cats: [...state.cats, ...images] }));
    }
  }, [images]);

  useEffect(() => {
    if (selectedCatID) {
      const lodalSelectedCat = async () => {
        const catData = await getCatById(selectedCatID);
        setSelectedCat(catData);
      };

      lodalSelectedCat();
    }
  }, [selectedCatID]);

  const fetchNextPage = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);

    setCatsState((state) => ({ ...state, status: "loading" }));
    try {
      const cats = await getRandomCats({ ...(randomCatsApiOptions as CatsAPIOptions), page: nextPage });
      setCatsState((state) => ({ status: "success", cats: [...state.cats, ...cats] }));
    } catch (error) {
      setCatsState((state) => ({ ...state, status: "error" }));
    }
  };

  const handleSelectCat = (e: MouseEvent<HTMLAnchorElement>, data: Cat) => {
    e.preventDefault();
    setSelectedCat(data);
    setSearchParams({ catID: data.id });
  };
  const handleDeselectCat = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setSelectedCat(null);
    setSearchParams({});
  };

  return (
    <div>
      <LoaderWrapper isLoading={catsState.cats.length === 0}>
        <div className={styles.wrapper}>
          {catsState.cats?.map((cat) => (
            <CatCard key={cat.id} {...cat} onSelectCat={handleSelectCat} />
          ))}
        </div>
      </LoaderWrapper>

      {Boolean(catsState.cats.length) && (
        <div className={styles.moreWrapper}>
          {catsState.status === "loading" && <Loader />}
          <div className={styles.moreBtn}>
            <Button type="primary" size="large" loading={catsState.status === "loading"} onClick={fetchNextPage}>
              Load more...
            </Button>
          </div>
        </div>
      )}

      {Boolean(selectedCat) && (
        <CatModal {...(selectedCat as Cat)} isOpen={Boolean(selectedCat)} onDeselectCat={handleDeselectCat} />
      )}
    </div>
  );
};

export default Cats;
