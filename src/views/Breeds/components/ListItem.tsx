import { FC, MouseEvent } from "react";
import styles from "./styles.module.css";
import { Breed } from "../../../types";

type ListItemProps = Breed & {
  onSelectBreed: (e: MouseEvent<HTMLAnchorElement>, breed: Breed) => void;
};

const ListItem: FC<ListItemProps> = ({ onSelectBreed, ...breed }) => {
  const { id, name } = breed;
  const handleSelectBreed = (e: MouseEvent<HTMLAnchorElement>) => {
    onSelectBreed(e, breed);
  };

  return (
    <li key={id} className={styles.listItem}>
      <a href="!#" onClick={handleSelectBreed}>
        {name}
      </a>
    </li>
  );
};

export default ListItem;
