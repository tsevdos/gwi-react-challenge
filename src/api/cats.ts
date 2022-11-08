import { client } from "./client";
import { Cat } from "../types/cats";

export const getRandomCats = async (queryStr = ""): Promise<Cat[]> => {
  const res = await client.get("https://api.thecatapi.com/v1/images/search?page=1&limit=10&order=RAND");

  return res.data;
};
