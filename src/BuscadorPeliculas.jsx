import useForm from "./hooks/useForm";
import useFetch from "./hooks/useFetch";
import { useState } from "react";
const BuscadorPeliculas = () => {
  const [pgn, setPGN] = useState(1);
  const init = { movie_name: "" };
  const { values, movie_name, onChanging } = useForm(init);
  var encodedString = encodeURIComponent(values.movie_name);
  const url = `https://api.themoviedb.org/3/search/movie?query=${encodedString}&include_adult=false&language=en-US&page=${pgn}&region=us`;
  const { data, isLoading } = useFetch(url);
  const Submiting = (e) => {
    e.preventDefault();
    console.log(values);
  };

  if (isLoading) {
    console.log("cargando");
  } else {
    var total_of_pages = data.total_pages;
    var arra = [];
    for (let i = 1; i <= total_of_pages; i++) {
      arra.push(i);
    }
  }
  const paginationNumber = ({ target }) => {
    // const id_number = document.getElementById(e);
    setPGN(target.id);
  };
  return (
    <>
      <div className="container">
        <h1 className="bolder">BUSCADOR DE PELICULAS UNIVERSAL</h1>
        <form
          onSubmit={Submiting}
          className="d-flex gap-1 flex-column align-items-center"
        >
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Name of the movie
            </label>
            <input
              type="text"
              className="form-control "
              name="movie_name"
              placeholder="write de name of the movie"
              value={movie_name}
              onChange={onChanging}
            ></input>
          </div>
          <button type="submit">Buscar</button>
        </form>
      </div>
      <div className="container">
        <div className="movie-list">
          {isLoading == true
            ? console.log("cargando")
            : data.results.map((i) => {
                return (
                  <div key={i.id} className="movie-card">
                    <h2>{i.original_title}</h2>
                    <p>{i.overview}</p>
                    <img
                      src={`https://image.tmdb.org/t/p/original/${i.poster_path}`}
                      alt=""
                    />
                  </div>
                );
              })}
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" disabled>
                Pagination
              </a>
            </li>
            {isLoading == true
              ? console.log("cargando")
              : arra.map((i) => {
                  return (
                    <li key={i} className="page-item">
                      <a
                        id={`${i}`}
                        className="page-link"
                        onClick={() => paginationNumber(event)}
                      >
                        {i}
                      </a>
                    </li>
                  );
                })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default BuscadorPeliculas;
