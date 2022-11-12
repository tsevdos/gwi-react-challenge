import { FC } from "react";
import { Link } from "react-router-dom";
import useCatsStore from "../../../stores/cats";
import { URLS } from "../../../utils/constants";
import { Cat } from "../../../types/cats";
import styles from "./styles.module.css";

const CatCard: FC<Cat> = (props) => {
  const { id, url } = props;
  const { selectCat } = useCatsStore();
  const handleSelectCat = () => {
    selectCat(props);
  };

  return (
    <div className={styles.card}>
      <Link to={URLS.createCatLink(id)} title={`cat ${id}`} onClick={handleSelectCat}>
        <img src={url} alt={`cat ${id}`} />
      </Link>
    </div>
  );
};

export default CatCard;
