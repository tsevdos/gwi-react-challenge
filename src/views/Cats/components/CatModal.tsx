import { useState, FC, MouseEvent, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Modal, Typography, Button } from "antd";
import { LoaderWrapper } from "../../../components";
import useCatsStore from "../../../stores/cats";
import { getCatById, postFavoriteCat } from "../../../api/cats";
import { URLS } from "../../../utils/constants";
import { showNotification } from "../../../utils/notifications";
import { Cat, Status } from "../../../types";
import styles from "./styles.module.css";

const { Title } = Typography;

const CatModal: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { selectedCat } = useCatsStore();
  const [catImageState, setCatImageState] = useState<{
    status: Status;
    data: Cat | null;
  }>({ status: "loading", data: null });
  const [disableBtn, setDisableBtn] = useState(false);
  const handleDeselectCat = () => {
    navigate(URLS.cats);
  };

  useEffect(() => {
    if (selectedCat) {
      // cat image data already exist in the list - don't make another HTTP request to fetch them
      setCatImageState({ status: "success", data: selectedCat });
    } else {
      // cat image data don't exist in the list - make another HTTP request to fetch them
      const fetchCatImage = async () => {
        try {
          const data = await getCatById(id as string);
          setCatImageState({ status: "success", data });
        } catch (error) {
          setCatImageState({ status: "error", data: null });
        }
      };

      fetchCatImage();
    }
  }, [id, selectedCat]);

  const markAsFavorite = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setDisableBtn(true);
    try {
      await postFavoriteCat(id as string);
      showNotification("success", "Added to favourites", "Successfully added to favourites...");
    } catch (err) {
      showNotification("error", "Opps something went wrong", "Please try again...");
    } finally {
      setDisableBtn(false);
    }
  };

  const { status, data: catImage } = catImageState;

  return (
    <Modal title={`Cat id: ${id}`} open={Boolean(id)} onCancel={handleDeselectCat} footer={null}>
      <LoaderWrapper status={status}>
        {catImage && (
          <div>
            <img src={catImage.url} alt={`cat ${id}`} className={styles.image} />
            {Boolean(catImage.breeds?.length) && (
              <Link to={URLS.createBreedLink(catImage.breeds[0]?.id)}>
                <Title level={5}>{catImage.breeds[0]?.name}</Title>
              </Link>
            )}
            <Button type="primary" loading={disableBtn} onClick={markAsFavorite}>
              Add to favourites
            </Button>
          </div>
        )}
      </LoaderWrapper>
    </Modal>
  );
};

export default CatModal;
