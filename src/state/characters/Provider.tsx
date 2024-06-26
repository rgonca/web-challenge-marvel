'use client'
import { type ReactNode, useReducer } from 'react'
import reducer from './reducer'
import Context from './Context'
import { type Character } from '@/interfaces/character'

interface CharactersProviderProps {
  initialState: Character[]
  children: ReactNode
}

export default function CharactersProvider ({ initialState, children }: CharactersProviderProps) {
  const [characters, dispatch] = useReducer(reducer, initialState)
  const setCharacters = (characters: Character[]) => { dispatch({ type: 'SET', payload: characters }) }
  return (
    <Context.Provider value={{ characters, setCharacters }}>
      {children}
    </Context.Provider>
  )
}
