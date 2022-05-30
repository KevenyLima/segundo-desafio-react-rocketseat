import { useState } from "react";

import "./styles/global.scss";

import SideBar from "./components/SideBar";
import { Content } from "./components/Content";
import { MovieProps } from "./interfaces/IMoviesProps";
import { GenreResponseProps } from "./interfaces/IGenreResponseProps";


export function App() {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  );
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar setMovies={setMovies} setSelectedGenre={setSelectedGenre} />
      <Content selectedGenre={selectedGenre} movies={movies} />
    </div>
  );
}
