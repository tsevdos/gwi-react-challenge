import { FC, MouseEvent } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Modal, Carousel, Typography } from "antd";
import { LoaderWrapper } from "../../components";
import { usePromise } from "../../hooks";
import { getBreedImagesById } from "../../api/cats";
import { paths } from "../../utils/constants";
import styles from "./styles.module.css";
import useCatsStore from "../../stores/cats";

const { Title } = Typography;

const BreedsModal: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { selectedBreed } = useCatsStore();
  const { status, data: breedImages } = usePromise(getBreedImagesById, id);
  const handleDeselectBreed = (e: MouseEvent<HTMLElement>) => {
    navigate(paths.breeds);
  };

  return (
    <Modal title={`Breed: ${selectedBreed?.name} (${id})`} open={true} onCancel={handleDeselectBreed} footer={null}>
      <LoaderWrapper status={status}>
        <Carousel autoplay>
          {status === "success" &&
            breedImages?.map(({ id, url }) => (
              <div key={id}>
                <Link to={`${paths.cats}?catID=${id}`}>
                  <img src={url} alt="my alt" className={styles.modalImage} />
                </Link>
              </div>
            ))}
        </Carousel>

        <div className={styles.modalBody}>
          {selectedBreed?.description && (
            <>
              <Title level={5}>Description</Title>
              <p>{selectedBreed?.description}</p>
            </>
          )}
          <p>
            <a href={selectedBreed?.wikipedia_url} target="_blank" rel="noreferrer">
              Learn more
            </a>
          </p>
        </div>
      </LoaderWrapper>
    </Modal>
  );
};

export default BreedsModal;
