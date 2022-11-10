import { useState, FC, MouseEvent } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./CatCard.module.css";
import { Cat } from "../../types/cats";
import { CatModal } from "../";

const CatCard: FC<Cat> = (props) => {
  const { id, url } = props;
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_searchParams, setSearchParams] = useSearchParams();
  const openModal = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(true);
    setSearchParams({ catID: id });
  };
  const closeModal = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsOpen(false);
    setSearchParams({});
  };

  return (
    <div className={styles.card}>
      <a href="!#" title={`cat ${id}`} onClick={openModal}>
        <img src={url} alt={`cat ${id}`} />
      </a>
      <CatModal {...props} isOpen={isOpen} onCancel={closeModal} />
    </div>
  );
};

export default CatCard;
