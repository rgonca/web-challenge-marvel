import { createContext } from 'react';
import { Character } from '@/interfaces/character';

interface CharactersContextType {
    characters: Character[];
    setCharacters: (characters: Character[]) => void;
  }

  // Provide a default value matching the context shape
const defaultContextValue: CharactersContextType = {
    characters: [], // Assuming characters is an array, adjust if it's different
    setCharacters: () => {}, // No-op function as a placeholder
  };

  const CharactersContext = createContext<CharactersContextType>(defaultContextValue);

export default CharactersContext;
