import { FC, useState } from "react";
import { Button } from "antd";
import { removeFromFavorites } from "../../../api/cats";
import { showNotification } from "../../../utils/notifications";
import { FavoriteCat } from "../../../types";
import styles from "./styles.module.css";

const CatCard: FC<FavoriteCat & { removeFromFavoritesList: (id: number) => void }> = ({
  removeFromFavoritesList,
  ...catImage
}) => {
  const [btnIsLoading, setBtnIsLoading] = useState(false);
  const handleRemoveFromFavorites = async () => {
    setBtnIsLoading(true);
    try {
      await removeFromFavorites(catImage.id.toString());
      removeFromFavoritesList(catImage.id);
      showNotification("success", "Removed from favorites", "Successfully removed from favorites...");
    } catch (err) {
      showNotification("error", "Opps something went wrong", "Please try again...");
    } finally {
      setBtnIsLoading(false);
    }
  };

  return (
    <div className={styles.card}>
      <img src={catImage.image.url} alt={`cat ${catImage.image.id}`} className={styles.image} />
      <div className={styles.cardBody}>
        <Button type="primary" loading={btnIsLoading} onClick={handleRemoveFromFavorites}>
          Remove from favourites
        </Button>
      </div>
    </div>
  );
};

export default CatCard;
