import { FC, MouseEvent } from "react";
import { Cat } from "../../../types/cats";
import styles from "./styles.module.css";

type CatCardProps = Cat & {
  onSelectCat: (e: MouseEvent<HTMLAnchorElement>, cat: Cat) => void;
};

const CatCard: FC<CatCardProps> = ({ onSelectCat, ...cat }) => {
  const { id, url } = cat;
  const handleSelectCat = (e: MouseEvent<HTMLAnchorElement>) => {
    onSelectCat(e, cat);
  };

  return (
    <div className={styles.card}>
      <a href="!#" title={`cat ${id}`} onClick={handleSelectCat}>
        <img src={url} alt={`cat ${id}`} />
      </a>
    </div>
  );
};

export default CatCard;
