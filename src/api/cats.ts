import { client } from "./client";
import { userID } from "../utils/constants";
import { Breed, Cat, CatsAPIOptions } from "../types/cats";

export const getRandomCats = async ({ page, limit, order }: CatsAPIOptions): Promise<Cat[]> => {
  const res = await client.get(`images/search?page=${page}&limit=${limit}&order=${order}`);

  return res.data;
};

export const getCatById = async (id: string): Promise<Cat> => {
  const res = await client.get(`images/${id}`);

  return res.data;
};

export const getBreeds = async (): Promise<Breed[]> => {
  const res = await client.get(`breeds`);

  return res.data;
};

export const getBreedImagesById = async (breedID: string): Promise<Cat[]> => {
  const res = await client.get(`images/search?breed_ids=${breedID}&limit=5`);

  return res.data;
};

export const postFavoriteCat = async (id: string): Promise<unknown> => {
  const res = await client.post(`favourites`, {
    image_id: id,
    sub_id: userID,
  });

  return res.data;
};
