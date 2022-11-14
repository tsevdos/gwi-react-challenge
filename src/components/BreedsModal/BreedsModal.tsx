import { FC } from "react";
import { Link } from "react-router-dom";
import { Modal, Carousel, Typography } from "antd";
import { LoaderWrapper } from "../";
import { URLS } from "../../utils/constants";
import { Cat, Breed, Status } from "../../types";
import styles from "./styles.module.css";

const { Title } = Typography;

type BreedsModalProps = {
  breed: Breed | null;
  breedImages: Cat[] | null;
  breedImagesStatus: Status;
  onCloseModal: () => void;
};

const BreedsModal: FC<BreedsModalProps> = ({ breed, breedImagesStatus, breedImages, onCloseModal }) => (
  <Modal title={`Breed: ${breed?.name} (${breed?.id})`} open={true} onCancel={onCloseModal} footer={null}>
    <LoaderWrapper status={breedImagesStatus}>
      <Carousel autoplay>
        {breedImages &&
          breedImages.map(({ id, url }) => (
            <div key={id}>
              <Link to={URLS.createCatLink(id)}>
                <img src={url} alt="my alt" className={styles.modalImage} />
              </Link>
            </div>
          ))}
      </Carousel>

      <div className={styles.modalBody}>
        {breed && (
          <>
            <Title level={5}>Description</Title>
            <p>{breed.description}</p>
            <p>
              <a href={breed.wikipedia_url} target="_blank" rel="noreferrer">
                Learn more
              </a>
            </p>
          </>
        )}
      </div>
    </LoaderWrapper>
  </Modal>
);

export default BreedsModal;
