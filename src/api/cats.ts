import { client } from "./client";
import { endpoints } from "../utils/constants";
import { Cat, CatsAPIOptions } from "../types/cats";

export const getRandomCats = async ({ page, limit, order }: CatsAPIOptions): Promise<Cat[]> => {
  const res = await client.get(`${endpoints.root}${endpoints.search}?page=${page}&limit=${limit}&order=${order}`);

  return res.data;
};

export const getCatById = async (id: string): Promise<Cat> => {
  const res = await client.get(`${endpoints.root}${endpoints.images}/${id}`);

  return res.data;
};
