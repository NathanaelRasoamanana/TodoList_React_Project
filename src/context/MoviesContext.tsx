import { createContext } from "react";
import type { ImdbTitle } from "../types/MoviesType";

type StateState = {
    films: ImdbTitle[];
    setFilms: React.Dispatch<React.SetStateAction<ImdbTitle[]>>;
};

export const MoviesContext = createContext<StateState>({
    films : [],
    setFilms:()=>{},
})