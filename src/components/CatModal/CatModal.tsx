import { FC, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { Modal, Typography, Spin, Button } from "antd";
import styles from "./CatModal.module.css";
import { postFavoriteCat } from "../../api/cats";
import { Cat } from "../../types/cats";
import { Status } from "../../types/general";

const { Title } = Typography;

type CatCardProps = (Cat | null) & {
  isOpen: boolean;
  status?: Status;
  onCancel: (e: MouseEvent<HTMLElement>) => void;
};

const CatModal: FC<CatCardProps> = ({ isOpen, status = "success", id, url, breeds, onCancel }) => {
  const markAsFavorite = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("markAsFavorite");

    try {
      const res = await postFavoriteCat(id);
      console.log("Success");
      // loadMoreCats(data);
      // setStatus("success");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal title={`Cat id: ${id}`} open={isOpen} onCancel={onCancel} footer={null}>
      {status === "loading" && (
        <div className={styles.loaderWrapper}>
          <Spin size="large" />
        </div>
      )}
      {status === "success" && (
        <div>
          <img src={url} alt={`cat ${id}`} className={styles.image} />
          {Boolean(breeds) && (
            <Link to="/">
              <Title level={5}>{breeds[0]?.name}</Title>
            </Link>
          )}
          <Button type="primary" /* loading={status === "loading"}*/ onClick={markAsFavorite}>
            Favourite
          </Button>
        </div>
      )}
    </Modal>
  );
};

export default CatModal;
