import { useState, FC, MouseEvent } from "react";
import { Typography } from "antd";
import { ListItem, BreedsModal } from "./components/";
import { LoaderWrapper } from "../../components/";
import { getBreeds } from "../../api/cats";
import { Breed } from "../../types/";
import { usePromise } from "../../hooks";

const { Title } = Typography;

const Breeds: FC = () => {
  const [selectedBreed, setSelectedBreed] = useState<Breed | null>(null);
  const { status, data: breeds } = usePromise(getBreeds);

  const handleSelectBreed = (e: MouseEvent<HTMLAnchorElement>, data: Breed) => {
    e.preventDefault();
    setSelectedBreed(data);
  };
  const handleDeselectBreed = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setSelectedBreed(null);
  };

  return (
    <div>
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
