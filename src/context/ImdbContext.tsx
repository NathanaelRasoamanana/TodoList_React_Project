import { createContext, useContext } from "react";
import type { ImdbTitle } from "../types/MoviesType";

export type ImdbContextType = {
  movies: ImdbTitle[];
  setMovies: React.Dispatch<React.SetStateAction<ImdbTitle[]>>;
};

export const ImdbContext = createContext<ImdbContextType | null>(null);

//fonction que j'appelle quand je veux utiliser mon context ImdbContext
export const useImdbContext = () => {
  const context = useContext(ImdbContext);
  if (!context) {
    throw new Error("useImdbContext doit être utilisé dans ImdbProvider");
  }
  return context;
};