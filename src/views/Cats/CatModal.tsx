import { useState, FC, MouseEvent } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Modal, Typography, Button } from "antd";
import { LoaderWrapper } from "../../components";
import { usePromise } from "../../hooks";
import { getCatById, postFavoriteCat } from "../../api/cats";
import { paths } from "../../utils/constants";
import styles from "./styles.module.css";

const { Title } = Typography;

const CatModal: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [disableBtn, setDisableBtn] = useState(false);
  const { status, data: catImage } = usePromise(getCatById, id);
  const handleDeselectCat = (e: MouseEvent<HTMLElement>) => {
    navigate(paths.cats);
  };

  const markAsFavorite = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDisableBtn(true);
    try {
      await postFavoriteCat(id as string);
    } catch (err) {
      console.log(err);
    } finally {
      setDisableBtn(false);
    }
  };

  return (
    <Modal title={`Cat id: ${id}`} open={Boolean(id)} onCancel={handleDeselectCat} footer={null}>
      <LoaderWrapper status={status}>
        <div>
          <img src={catImage?.url} alt={`cat ${id}`} className={styles.image} />
          {Boolean(catImage?.breeds?.length) && (
            <Link to={paths.breeds}>
              <Title level={5}>{catImage?.breeds[0]?.name}</Title>
            </Link>
          )}
          <Button type="primary" loading={disableBtn} onClick={markAsFavorite}>
            Favourite
          </Button>
        </div>
      </LoaderWrapper>
    </Modal>
  );
};

export default CatModal;
