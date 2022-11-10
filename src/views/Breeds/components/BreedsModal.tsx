import { useState, useEffect, FC, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { Modal, Carousel } from "antd";
import { LoaderWrapper } from "../../../components";
import { getBreedImagesById } from "../../../api/cats";
import { Breed, Cat, Status } from "../../../types";
import { paths } from "../../../utils/constants";

type ListItemProps = Breed & {
  isOpen: boolean;
  onDeselectBreed: (e: MouseEvent<HTMLElement>) => void;
};

const contentStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  height: "300px",
};

const BreedsModal: FC<ListItemProps> = ({ id, name, onDeselectBreed }) => {
  const [breedImagesData, setBreedImagesData] = useState<{
    status: Status;
    images: Cat[] | null;
  }>({ status: "loading", images: null });
  const { status, images } = breedImagesData;

  const handleDeselectBreed = (e: MouseEvent<HTMLElement>) => {
    onDeselectBreed(e);
  };

  useEffect(() => {
    const loadBreedImages = async () => {
      try {
        const data = await getBreedImagesById(id);
        setBreedImagesData({ status: "success", images: data });
      } catch (error) {
        setBreedImagesData({ status: "error", images: null });
      }
    };

    loadBreedImages();
  }, [id]);

  console.log(status, images);

  return (
    <Modal title={`Breed: ${name} (${id})`} open={true} onCancel={handleDeselectBreed} footer={null}>
      <LoaderWrapper status={status}>
        <Carousel>
          {status === "success" &&
            images?.map(({ id, url }) => (
              <div key={id}>
                <Link to={`${paths.cats}?catID=${id}`}>
                  <img src={url} alt="my alt" style={contentStyle} />
                </Link>
              </div>
            ))}
        </Carousel>
      </LoaderWrapper>
    </Modal>
  );
};

export default BreedsModal;
