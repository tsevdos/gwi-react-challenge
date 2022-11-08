import { FC } from "react";
import styles from "./CatCard.module.css";
import { Cat } from "../types/cats";

const CatCard: FC<Cat> = ({ id, url }) => {
  return (
    <div className={styles.card}>
      <img src={url} alt={`cat ${id} `} />
      {/* <h3>A Super Wonderful Headline</h3>
      <p>Lorem ipsum sit dolor amit</p> */}
    </div>
  );
};

export default CatCard;
