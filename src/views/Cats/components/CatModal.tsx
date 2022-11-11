import { FC, useState, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { Modal, Typography, Button } from "antd";
import styles from "./styles.module.css";
import { postFavoriteCat } from "../../../api/cats";
import { Cat } from "../../../types/cats";

const { Title } = Typography;

type CatCardProps = Cat & {
  isOpen: boolean;
  onDeselectCat: (e: MouseEvent<HTMLElement>) => void;
};

const CatModal: FC<CatCardProps> = ({ onDeselectCat, isOpen, ...cat }) => {
  const { id, url, breeds } = cat;
  const [disableBtn, setDisableBtn] = useState(false);

  const handleDeselectCat = (e: MouseEvent<HTMLElement>) => {
    onDeselectCat(e);
  };
  const markAsFavorite = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDisableBtn(true);
    try {
      await postFavoriteCat(id);
    } catch (err) {
      console.log(err);
    } finally {
      setDisableBtn(false);
    }
  };

  return (
    <Modal title={`Cat id: ${id}`} open={isOpen} onCancel={handleDeselectCat} footer={null}>
      <div>
        <img src={url} alt={`cat ${id}`} className={styles.image} />
        {Boolean(breeds.length) && (
          <Link to="/">
            <Title level={5}>{breeds[0]?.name}</Title>
          </Link>
        )}
        <Button type="primary" loading={disableBtn} onClick={markAsFavorite}>
          Favourite
        </Button>
      </div>
    </Modal>
  );
};

export default CatModal;
