import { FC } from "react";
import { Link } from "react-router-dom";
import useCatsStore from "../../../stores/cats";
import { paths } from "../../../utils/constants";
import { Breed } from "../../../types";
import styles from "./styles.module.css";

const ListItem: FC<Breed> = (props) => {
  const { id, name } = props;
  const { selectBreed } = useCatsStore();
  const handleSelectBreed = () => {
    selectBreed(props);
  };

  return (
    <li key={id} className={styles.listItem}>
      <Link to={`${paths.breeds}/${id}`} title={`cat ${id}`} onClick={handleSelectBreed}>
        {name}
      </Link>
    </li>
  );
};

export default ListItem;
