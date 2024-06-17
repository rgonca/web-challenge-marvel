import { createContext } from "react";

import { Character } from "@/interfaces/character";

export interface FavoritesContextType {
  favorites: { [id: string]: Character };
  addFavorite: (id: any, character: Character) => void;
  removeFavorite: (id: any) => void;
}

const defaultContextValue: FavoritesContextType = {
  favorites: {},
  addFavorite: () => {},
  removeFavorite: () => {},
};

const FavoritesContext =
  createContext<FavoritesContextType>(defaultContextValue);

export default FavoritesContext;
