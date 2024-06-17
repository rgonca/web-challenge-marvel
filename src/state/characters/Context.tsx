import { createContext } from 'react';
import { Character } from '@/interfaces/character';

interface CharactersContextType {
    characters: Character[];
    setCharacters: (characters: Character[]) => void;
  }

const defaultContextValue: CharactersContextType = {
    characters: [],
    setCharacters: () => {},
  };

  const CharactersContext = createContext<CharactersContextType>(defaultContextValue);

export default CharactersContext;
