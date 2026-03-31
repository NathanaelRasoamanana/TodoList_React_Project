import { useEffect, useState } from "react";
import axios from "axios";
import type { ImdbTitle, ImdbTitlesResponse } from "../types/MoviesType";
import { randomDateGenerator } from "../data/dates";

const api = axios.create({
  baseURL:"https://api.imdbapi.dev/"
})

export function useImdb() {
  const [movies, setMovies] = useState<ImdbTitle[]>([]);

  useEffect(() => {

    api
      .get<ImdbTitlesResponse>("/titles")
      .then((res) => {
        const list = res.data.titles ?? [];

        // Déduplication via Map
        const unique = new Map<string, ImdbTitle>();
        [...movies, ...list].forEach((movie) => unique.set(movie.id, movie));

        const uniqueMovies = Array.from(unique.values()).map((movie) => ({
          ...movie,
          dates: randomDateGenerator(1,5)
        }));

        setMovies(uniqueMovies);
      })
      .catch((err) => console.error(err))
  }, []);

  return {movies} 
};
