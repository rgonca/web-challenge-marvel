'use client';
import { ReactNode, useReducer } from 'react';
import reducer from './reducer';
import Context from './Context';
import { Character } from '@/interfaces/character';

interface CharactersProviderProps {
  initialState: Character[]; // Adjust the type according to your actual initial state structure
  children: ReactNode;
}

export default function CharactersProvider({ initialState, children }: CharactersProviderProps) {
  const [characters, dispatch] = useReducer(reducer, initialState);
  const setCharacters = (characters: Character[]) =>
    dispatch({ type: 'SET', payload: characters });
  return (
    <Context.Provider value={{ characters, setCharacters }}>
      {children}
    </Context.Provider>
  );
}
