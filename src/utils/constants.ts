export const userID = "User-1234";

export const URLS = {
  home: "/",
  cats: "/cats",
  createCatLink: (catID: string): string => `/cats/${catID}`,
  breeds: "/breeds",
  createBreedLink: (breedID: string): string => `/breeds/${breedID}`,
} as const;
