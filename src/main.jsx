import React from "react";
import ReactDOM from "react-dom/client";
// import BuscadorPeliculas from "./BuscadorPeliculas";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/buscador.css";
import MovieSearch from "./MovieSearch";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <BuscadorPeliculas></BuscadorPeliculas> */}
    <MovieSearch></MovieSearch>
  </React.StrictMode>
);
