import { createContext } from "react";
import type { ApiProps } from "../types/ApiProps";

type StateMoviesProps = {
    movies: ApiProps[];
    setMovies: React.Dispatch<React.SetStateAction<ApiProps[]>>;
};

export const MoviesContext = createContext<StateMoviesProps>({
    movies: [],
    setMovies: () => {},
});