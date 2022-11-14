import { FC } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BreedsModal } from "../../components";
import useCatsStore from "../../stores/cats";
import { usePromise } from "../../hooks";
import { getBreedImagesById } from "../../api/cats";
import { URLS } from "../../utils/constants";

const SelectedBreed: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { selectedBreed } = useCatsStore();
  const { status, data: breedImages } = usePromise(getBreedImagesById, id);
  const handleDeselectBreed = () => {
    navigate(URLS.breeds);
  };

  return (
    <BreedsModal
      breed={selectedBreed}
      breedImagesStatus={status}
      breedImages={breedImages}
      onCloseModal={handleDeselectBreed}
    />
  );
};

export default SelectedBreed;
