import { useParams } from "react-router-dom";
import { Box, Card } from "@mui/material";
// import { useImdb } from "../api/Imdb";
import Bouton from "../ui/Button";
import { useContext, useEffect } from "react";
import { MoviesContext } from "../context/MoviesContext";
import axios from "axios";
import type { ImdbTitle, ImdbTitlesResponse } from "../types/MoviesType";
import { randomDateGenerator } from "../data/dates";

export default function SingleMovie() {
  const { id } = useParams(); 
  const { films , setFilms} = useContext(MoviesContext);

  const film = films.find(s => s.id === id); 

  const api = axios.create({
    baseURL:"https://api.imdbapi.dev/"
  })

  useEffect(() => {
  
      api
        .get<ImdbTitlesResponse>("/titles")
        .then((res) => {
          const list = res.data.titles ?? [];
  
          // Déduplication via Map
          const unique = new Map<string, ImdbTitle>();
          [...films, ...list].forEach((film) => unique.set(film.id, movie));
  
          const uniqueMovies = Array.from(unique.values()).map((film) => ({
            ...film,
            dates: randomDateGenerator(1,5)
          }));
  
          setFilms(uniqueMovies);
        })
        .catch((err) => console.error(err))
    }, []);
  

  return (
    <>
      {film && (
        <Card sx={{ 
          justifyContent: "center", 
          p: 2 ,
          display:"grid",
          gridTemplateColumns: "repeat(auto-fill, 300px)",

          }}>
          
          <h3>{film.primaryTitle}</h3>
          <p>{film.plot}</p>

          <Box sx={{
            display:"grid",
            m:2,
            gap:1
          }}>
              
            {film.dates?.map(date => (
              <Bouton 
                key={crypto.randomUUID()}
                type="button"
                variant="outlined"
                buttonText ={date}
              />))}

            </Box>         
        </Card>
      )}
    </>
  );
}