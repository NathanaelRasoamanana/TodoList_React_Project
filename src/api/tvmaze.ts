import axios from "axios";

const api = axios.create({
  baseURL: "https://api.imdbapi.dev"
  // baseURL: "https://api.tvmaze.com"

});

export const getShows = () => api.get("/shows");
export const searchShows = (query: string) => api.get(`/search/shows?q=${query}`);