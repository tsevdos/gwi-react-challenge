import { FC, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { Modal, Button, Typography } from "antd";
import { LoaderWrapper } from "..";
import { URLS } from "../../utils/constants";
import { Cat, Status } from "../../types";
import styles from "./styles.module.css";

const { Title } = Typography;

type CatModalProps = {
  status: Status;
  cat: Cat | null;
  btnLoading: boolean;
  btnAction: (e: MouseEvent<HTMLButtonElement>) => void;
  onCloseModal: () => void;
};

const CatModal: FC<CatModalProps> = ({ cat, status, btnLoading, btnAction, onCloseModal }) => (
  <Modal title={`Cat id: ${cat?.id}`} open={Boolean(cat?.id)} onCancel={onCloseModal} footer={null}>
    <LoaderWrapper status={status}>
      {cat && (
        <div>
          <img src={cat.url} alt={`cat ${cat.id}`} className={styles.image} />
          {Boolean(cat.breeds?.length) && (
            <Link to={URLS.createBreedLink(cat.breeds[0]?.id)}>
              <Title level={5}>{cat.breeds[0]?.name}</Title>
            </Link>
          )}
          <Button type="primary" loading={btnLoading} onClick={btnAction}>
            Add to favourites
          </Button>
        </div>
      )}
    </LoaderWrapper>
  </Modal>
);

export default CatModal;
