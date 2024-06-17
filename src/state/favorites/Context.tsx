import { createContext } from "react";

import { Character, CharacterDetails } from "@/interfaces/character";

export interface FavoritesContextType {
  favorites: { [id: string]: Character };
  addFavorite: (id: any, character: CharacterDetails) => void;
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
