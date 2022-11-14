import { useState, FC, MouseEvent, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CatModal } from "../../components";
import useCatsStore from "../../stores/cats";
import { getCatById, addToFavorites } from "../../api/cats";
import { URLS } from "../../utils/constants";
import { showNotification } from "../../utils/notifications";
import { Cat, Status } from "../../types";

const SelectedCat: FC = () => {
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
  const markAsFavorite = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setDisableBtn(true);
    try {
      await addToFavorites(id as string);
      showNotification("success", "Added to favourites", "Successfully added to favourites...");
    } catch (err) {
      showNotification("error", "Opps something went wrong", "Please try again...");
    } finally {
      setDisableBtn(false);
    }
  };
  const { status, data: catImage } = catImageState;

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

  return (
    <CatModal
      status={status}
      cat={catImage}
      btnLoading={disableBtn}
      btnAction={markAsFavorite}
      onCloseModal={handleDeselectCat}
    />
  );
};

export default SelectedCat;
