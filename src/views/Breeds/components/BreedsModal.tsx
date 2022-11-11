import { FC, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { Modal, Carousel } from "antd";
import { LoaderWrapper } from "../../../components";
import { getBreedImagesById } from "../../../api/cats";
import { Breed } from "../../../types";
import { paths } from "../../../utils/constants";
import styles from "./styles.module.css";
import { usePromise } from "../../../hooks";

type BreedsModalProps = Breed & {
  isOpen: boolean;
  onDeselectBreed: (e: MouseEvent<HTMLElement>) => void;
};

const BreedsModal: FC<BreedsModalProps> = ({ id, name, onDeselectBreed }) => {
  const { status, data: images } = usePromise(getBreedImagesById, id);
  const handleDeselectBreed = (e: MouseEvent<HTMLElement>) => {
    onDeselectBreed(e);
  };

  return (
    <Modal title={`Breed: ${name} (${id})`} open={true} onCancel={handleDeselectBreed} footer={null}>
      <LoaderWrapper status={status}>
        <Carousel>
          {status === "success" &&
            images?.map(({ id, url }) => (
              <div key={id}>
                <Link to={`${paths.cats}?catID=${id}`}>
                  <img src={url} alt="my alt" className={styles.modalImage} />
                </Link>
              </div>
            ))}
        </Carousel>
      </LoaderWrapper>
    </Modal>
  );
};

export default BreedsModal;
