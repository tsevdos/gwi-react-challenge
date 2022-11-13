import { FC, useEffect, useState } from "react";
import { Typography, Alert } from "antd";
import { usePromise } from "../../hooks";
import CatCard from "./components/CatCard";
import { LoaderWrapper } from "../../components/";
import { getFavorites } from "../../api/cats";
import { FavoriteCat } from "../../types";
import styles from "./styles.module.css";

const { Title } = Typography;

const Favourites: FC = () => {
  const [favoriteCats, setFavoriteCats] = useState<FavoriteCat[] | null>(null);
  const { status, data: originalFavorites } = usePromise(getFavorites);
  const removeFromFavoritesList = (id: number) => {
    const newFavoriteCats = originalFavorites?.filter((catImg) => catImg.id !== id);
    setFavoriteCats(newFavoriteCats as FavoriteCat[]);
  };

  useEffect(() => {
    setFavoriteCats(originalFavorites);
  }, [originalFavorites, setFavoriteCats]);

  console.log(favoriteCats);

  return (
    <div>
      <Title>Favourites</Title>
      {favoriteCats?.length === 0 && (
        <Alert type="info" message="You have 0 favorite cat images. Please add some to view them." />
      )}
      <LoaderWrapper status={status}>
        <div className={styles.wrapper}>
          {favoriteCats?.map((catImage) => (
            <CatCard key={catImage.id} {...catImage} removeFromFavoritesList={removeFromFavoritesList} />
          ))}
        </div>
      </LoaderWrapper>
    </div>
  );
};

export default Favourites;
