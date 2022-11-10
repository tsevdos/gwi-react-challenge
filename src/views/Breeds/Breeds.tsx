import { useState, useEffect, FC, MouseEvent } from "react";
import { Typography } from "antd";
import { ListItem, BreedsModal } from "./components/";
import { LoaderWrapper } from "../../components/";
import { getBreeds } from "../../api/cats";
import styles from "./styles.module.css";
import { Breed, Status } from "../../types/";

const { Title } = Typography;

const Breeds: FC = () => {
  const [breedsData, setBreedsData] = useState<{
    status: Status;
    breeds: Breed[] | null;
  }>({ status: "loading", breeds: null });
  const { status, breeds } = breedsData;
  const [selectedBreed, setSelectedBreed] = useState<Breed | null>(null);

  const handleSelectBreed = (e: MouseEvent<HTMLAnchorElement>, data: Breed) => {
    e.preventDefault();
    setSelectedBreed(data);
  };
  const handleDeselectBreed = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setSelectedBreed(null);
  };

  useEffect(() => {
    const loadBreeds = async () => {
      try {
        const data = await getBreeds();
        setBreedsData({ status: "success", breeds: data });
      } catch (error) {
        setBreedsData({ status: "error", breeds: null });
      }
    };

    loadBreeds();
  }, []);

  return (
    <div className={styles.wrapper}>
      <Title level={2}>Breeds</Title>
      <LoaderWrapper status={status}>
        <ul>
          {breeds?.map((breed) => (
            <ListItem key={breed.id} {...breed} onSelectBreed={handleSelectBreed} />
          ))}
        </ul>
      </LoaderWrapper>
      {Boolean(selectedBreed) && (
        <BreedsModal
          {...(selectedBreed as Breed)}
          isOpen={Boolean(selectedBreed)}
          onDeselectBreed={handleDeselectBreed}
        />
      )}
    </div>
  );
};

export default Breeds;
