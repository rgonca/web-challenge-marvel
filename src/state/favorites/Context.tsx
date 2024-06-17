import { createContext } from "react";

import { Character } from "@/interfaces/character";

interface FavoritesContextType {
  characters: Character[];
  setCharacters: (characters: Character[]) => void;
}

const defaultContextValue: FavoritesContextType = {
  characters: [],
  setCharacters: () => {}
};

const FavoritesContext =
  createContext<FavoritesContextType>(defaultContextValue);

export default FavoritesContext;
