import { FC, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { Typography } from "antd";
import { ListItem } from "./components/";
import { LoaderWrapper } from "../../components/";
import { usePromise } from "../../hooks";
import { getBreeds } from "../../api/cats";
import useCatsStore from "../../stores/cats";
import { Breed } from "../../types";

const { Title } = Typography;

const Breeds: FC = () => {
  const { id } = useParams();
  const { selectBreed } = useCatsStore();
  const { status, data: breeds } = usePromise(getBreeds);

  useEffect(() => {
    if (id) {
      const breed = breeds?.find((breed) => breed.id === id);
      selectBreed(breed as Breed);
    }
  }, [id, breeds, selectBreed]);

  return (
    <div>
      <Title level={2}>Breeds</Title>
      <LoaderWrapper status={status}>
        <ul>
          {breeds?.map((breed) => (
            <ListItem key={breed.id} {...breed} />
          ))}
        </ul>
      </LoaderWrapper>

      {status === "success" && <Outlet />}
    </div>
  );
};

export default Breeds;
