import { FC } from "react";
import { Link } from "react-router-dom";
import { Cat } from "../../../types/cats";
import { paths } from "../../../utils/constants";
import styles from "./styles.module.css";

const CatCard: FC<Cat> = ({ id, url }) => {
  return (
    <div className={styles.card}>
      <Link to={`${paths.cats}/${id}`} title={`cat ${id}`}>
        <img src={url} alt={`cat ${id}`} />
      </Link>
    </div>
  );
};

export default CatCard;
