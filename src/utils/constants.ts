export const userID = "l8ywxn";

export const URLS = {
  home: "/",
  cats: "/cats",
  createCatLink: (catID: string): string => `/cats/${catID}`,
  breeds: "/breeds",
  createBreedLink: (breedID: string): string => `/breeds/${breedID}`,
  favourites: "/favourites",
} as const;
