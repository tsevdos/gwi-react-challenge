import { FC, useState } from "react";
import { Card } from "antd";
import { useQuery } from "@tanstack/react-query";
import { CatsAPIOptions } from "../types/cats";
import { queryKeys } from "../utils/constants";
import { getRandomCats } from "../api/cats";
import CatCard from "../components/CatCard";
import styles from "./Cats.module.css";

const { Meta } = Card;

const catsAPIOptions: CatsAPIOptions = {
  page: 1,
  limit: 10,
  order: "RAND",
};

const Cats: FC = () => {
  const [pageNumber, setPageNumber] = useState(catsAPIOptions.page);

  const { status, data: cats, error } = useQuery([queryKeys.search, "searchQuery"], () => getRandomCats());

  console.log(cats);

  return (
    <div className={styles.wrapper}>{status === "success" && cats.map((cat) => <CatCard key={cat.id} {...cat} />)}</div>
  );
};

export default Cats;
