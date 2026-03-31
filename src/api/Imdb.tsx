import { useEffect, useState } from "react";
import axios from "axios";
import type { ImdbTitle, ImdbTitlesResponse } from "../types/MoviesType";


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

        setMovies(Array.from(unique.values()));
      })
      .catch((err) => console.error(err))
  }, []);

  return { movies };
}