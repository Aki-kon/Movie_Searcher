import { useState } from "react";
import useFetch from "./hooks/useFetch";
import useForm from "./hooks/useForm";
const MovieSearch = () => {
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
      <header id="header_hero">
        <h1 id="title_hero">Movies Search</h1>
        <video autoPlay muted loop>
          <source src="../public/55248-499593984_medium.mp4" />
        </video>
      </header>
      <div className="container d-flex justify-content-center mb-2">
        <form onSubmit={Submiting} className="mt-5">
          <div>
            <input
              type="text"
              name="movie_name"
              placeholder="write the name of the movie"
              value={movie_name}
              onChange={onChanging}
              className=" icon"
            />
          </div>
        </form>
      </div>
      <div className="container-special">
        <div className="movie-list">
          {isLoading == true
            ? console.log("cargando")
            : data.results.map((i) => {
                return (
                  <div key={i.id} className="movie-card">
                    <img
                      className="movie-poster"
                      src={`${
                        i.poster_path == null
                          ? "../public/notimageavailable.jpg"
                          : `https://image.tmdb.org/t/p/original/${i.poster_path}`
                      }`}
                      alt="poster_images"
                    />
                    <h5 className="pt-2 ps-2 text-white fw-bold">
                      {i.original_title}
                    </h5>
                    <p className="ps-4 pb-1">
                      {i.release_date === "" ? "--/--/----" : i.release_date}
                    </p>
                    <div
                      id="qualification-container"
                      className="d-flex justify-content-center"
                    >
                      <span className="good py-2 px-3">
                        <span className="text-white fw-bold">
                          {i.vote_average}
                        </span>
                      </span>
                    </div>
                  </div>
                );
              })}
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link bg-primary text-white" href="#" disabled>
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
                        className="page-link bg-primary text-white"
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

export default MovieSearch;
