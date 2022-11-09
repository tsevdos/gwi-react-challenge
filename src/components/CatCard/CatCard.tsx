import { FC, MouseEvent } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./CatCard.module.css";
import { Cat } from "../../types/cats";

const CatCard: FC<Cat> = ({ id, url }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_searchParams, setSearchParams] = useSearchParams();
  const openModal = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setSearchParams({ catID: id });
  };

  return (
    <div className={styles.card}>
      <a href="!#" title={`cat ${id}`} onClick={openModal}>
        <img src={url} alt={`cat ${id}`} />
      </a>
    </div>
  );
};

export default CatCard;
