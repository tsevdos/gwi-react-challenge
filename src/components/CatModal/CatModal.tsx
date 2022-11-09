import { FC } from "react";
import { Link } from "react-router-dom";
import { Modal, Typography, Spin } from "antd";
import styles from "./CatModal.module.css";
import { Cat } from "../../types/cats";
import { Status } from "../../types/general";

const { Title } = Typography;

type CatCardProps = (Cat | null) & {
  isOpen: boolean;
  status: Status;
  onCancel: (e: React.MouseEvent<HTMLElement>) => void;
};

const CatModal: FC<CatCardProps> = ({ isOpen, status, id, url, breeds, onCancel }) => {
  return (
    <Modal title="Cat preview" open={isOpen} onCancel={onCancel} footer={null}>
      {status === "loading" && (
        <div className={styles.loaderWrapper}>
          <Spin size="large" />
        </div>
      )}
      {status === "success" && (
        <>
          <img src={url} alt={`cat ${id}`} className={styles.image} />
          {Boolean(breeds) && (
            <Link to="/">
              <Title level={5}>{breeds[0]?.name}</Title>
            </Link>
          )}
        </>
      )}
    </Modal>
  );
};

export default CatModal;
