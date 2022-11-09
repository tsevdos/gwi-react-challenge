import { FC, MouseEvent, useEffect } from "react";
import { Button, Spin } from "antd";
import { useSearchParams } from "react-router-dom";
import { useCatsStore } from "../../stores/";
import { Cat } from "../../types/cats";
import { getRandomCats, getCatById } from "../../api/cats";
import { CatCard, CatModal } from "../../components/";
import styles from "./Cats.module.css";

const Cats: FC = () => {
  const {
    apiOptions,
    cats: { status, entries },
    changePage,
    loadMoreCats,
    setStatus,
    selectedCat: { status: selectedCatStatus, entry: selectedCat },
    getSelectedCat,
    setSelectedCatStatus,
    removeSelectedCat,
  } = useCatsStore();
  const { page, limit, order } = apiOptions;
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCatID = searchParams.get("catID");

  const fetchNextPage = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    changePage(page + 1);
  };

  const resetSelectedCat = () => {
    removeSelectedCat();
    setSearchParams({});
  };

  useEffect(() => {
    const loadCats = async () => {
      setStatus("loading");
      try {
        const data = await getRandomCats({ page, limit, order });
        loadMoreCats(data);
        setStatus("success");
      } catch (error) {
        setStatus("error");
      }
    };

    loadCats();
  }, [page, limit, order, setStatus, loadMoreCats]);

  useEffect(() => {
    if (selectedCatID) {
      const lodalSelectedCat = async () => {
        try {
          const cat = await getCatById(selectedCatID);
          getSelectedCat(cat);
          setSelectedCatStatus("success");
        } catch (error) {
          setSelectedCatStatus("error");
        }
      };

      lodalSelectedCat();
    }
  }, [selectedCatID, getSelectedCat, setSelectedCatStatus]);

  return (
    <>
      <div className={styles.wrapper}>
        {Boolean(entries.length) && entries.map((cat) => <CatCard key={cat.id} {...cat} />)}
      </div>
      <div className={styles.loadingWrapper}>{status === "loading" && <Spin size="large" />}</div>
      <div className={styles.moreWrapper}>
        <Button type="primary" size="large" loading={status === "loading"} onClick={fetchNextPage}>
          Load more...
        </Button>
      </div>
      <CatModal
        {...(selectedCat as Cat)}
        status={selectedCatStatus}
        isOpen={Boolean(selectedCatID)}
        onCancel={resetSelectedCat}
      />
    </>
  );
};

export default Cats;
