'use client';
import { ReactNode, useEffect, useReducer } from 'react';
import reducer from './reducer';
import Context from './Context';
import { Character } from '@/interfaces/character';

interface FavoritesProviderProps {
  initialState: Character[];
  children: ReactNode;
}


export default function FavoritesProvider({ children }: FavoritesProviderProps) {
  const [favorites, dispatch] = useReducer(reducer, {});

  const loadFavorites = (characters: Character[]) =>
    dispatch({ type: 'LOAD', payload: characters });

  const addFavorite = (id: any, character: Character) =>
    dispatch({ type: 'ADD', payload: { id, character } });

  const removeFavorite = (id: any) => dispatch({ type: 'REMOVE', payload: id });

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      loadFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  return (
    <Context.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </Context.Provider>
  );
}
