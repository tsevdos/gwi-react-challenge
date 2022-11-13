import { FC, MouseEvent, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Button, Typography } from "antd";
import { getRandomCats } from "../../api/cats";
import { CatCard } from "./components/";
import { Loader, LoaderWrapper } from "../../components/";
import { usePromise } from "../../hooks";
import { Cat, CatsAPIOptions, Status } from "../../types";
import useCatsStore from "../../stores/cats";
import styles from "./styles.module.css";

const { Title } = Typography;
const randomCatsApiOptions = {
  page: 1,
  limit: 10,
  order: "RAND",
};

const Cats: FC = () => {
  const { selectCat } = useCatsStore();
  const [catsState, setCatsState] = useState<{
    status: Status;
    cats: Cat[];
  }>({ status: "loading", cats: [] });
  const [currentPage, setCurrentPage] = useState(randomCatsApiOptions.page);
  const { data: images } = usePromise(getRandomCats, randomCatsApiOptions);

  useEffect(() => {
    return () => {
      // deselect card when component unmount
      selectCat(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (images) {
      setCatsState((state) => ({ status: "success", cats: [...state.cats, ...images] }));
    }
  }, [images]);

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

  return (
    <div>
      <Title>Cats</Title>
      <LoaderWrapper isLoading={catsState.cats.length === 0}>
        <div className={styles.wrapper}>
          {catsState.cats?.map((cat) => (
            <CatCard key={cat.id} {...cat} />
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

      <Outlet />
    </div>
  );
};

export default Cats;
