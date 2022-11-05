

import React, { useState, useEffect } from "react";
import MovieDataService from "../services/movie";
import { Link } from "react-router-dom";

const MoviesList = props => {
	const [movies, setMovies] = useState([]);
	const [searchName, setSearchName ] = useState("");
	const [searchReleaseYear, setSearchReleaseYear ] = useState("");
	const [searchGenre, setSearchGenre ] = useState("");
	const [genres, setGenres] = useState(["All Genres"]);

	/**Tells React what to do after rendering */
	useEffect(() => {
		retrieveMovies();
		retrieveGenres();
	}, []);

  const onChangeSearchName = e => {
		const searchName = e.target.value;
		setSearchName(searchName);
  };

  const onChangeSearchReleaseYear = e => {
		const releaseYear = e.target.value;
		setSearchReleaseYear(releaseYear);
  };

  const onChangeSearchGenre = e => {
		const searchGenre = e.target.value;
		setSearchGenre(searchGenre);
  };

  const retrieveMovies = () => {
    MovieDataService.getAll()
			.then(response => {
				// console.log(response.data);
				setMovies(response.data.movies);
			})
			.catch(e => {
				console.log(e);
			});
  };

  const retrieveGenres = () => {
    MovieDataService.getGenres()
			.then(response => {
				// console.log(response.data);
				setGenres(["All Genres"].concat(response.data));
			})
			.catch(e => {
				console.log(e);
			});
};

  const refreshList = () => {
		retrieveMovies();
  };

  const find = (query, by) => {
    MovieDataService.find(query, by)
			.then(response => {
				// console.log(response.data);
				setMovies(response.data.movies);
			})
			.catch(e => {
				console.log(e);
			});
  };

  const findByName = () => {
		find(searchName, "name")
  };

  const findByReleaseYear = () => {
		find(searchReleaseYear, "Release Year")
  };

  const findByGenre = () => {
    if (searchGenre === "All Genres") {
			refreshList();
    } else {
			find(searchGenre, "genre")
    }
  };

  return (
    <div>
		<div className="row pb-1">
			<div className="input-group col-lg-4">
				<input
					type="text"
					className="form-control"
					placeholder="Search by name"
					value={searchName}
					onChange={onChangeSearchName}
				/>
				<div className="input-group-append">
					<button
						className="btn btn-outline-secondary"
						type="button"
						onClick={findByName}
					>
					Search
					</button>
				</div>
			</div>
			<div className="input-group col-lg-4">
				<input
					type="text"
					className="form-control"
					placeholder="Search by Release Year"
					value={searchReleaseYear}
					onChange={onChangeSearchReleaseYear}
				/>
				<div className="input-group-append">
					<button
					className="btn btn-outline-secondary"
					type="button"
					onClick={findByReleaseYear}
					>
					Search
					</button>
				</div>
			</div>
			<div className="input-group col-lg-4">
				<select onChange={onChangeSearchGenre}>
					{genres.map((genre, index) => {
					return (
							<option key={index} value={genre}> {genre.substr(0, 20)} </option>
					)
					})}
				</select>
				<div className="input-group-append">
					<button
						className="btn btn-outline-secondary"
						type="button"
						onClick={findByGenre}
					>
						Search
					</button>
				</div>
			</div>
		</div>

		{/* Movie list displays */}
			<div className="row">
				{movies.map((movie, index) => {
					return (
						<div key={index} className="col-lg-4 pb-1">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title">{movie.name}</h5>
									<p className="card-text">
										<strong>Genre: </strong>{movie.genres}<br/>
										<strong>Year: </strong>{movie.release_year}<br/>
										<strong>Overview: </strong>{movie.overview.substr(0,80) + "..."}
									</p>
									<div className="row">
									<Link 
										to={"/movies/"+movie._id} 
										className="btn btn-primary col-lg-5 mx-1 mb-1">
										View Reviews
									</Link>
									<a 
										href={"https://www.imdb.com/title/"+movie.imdb_id}
										target="_blank" 
										rel="noopener noreferrer"
										className="btn btn-primary col-lg-5 mx-1 mb-1">
										IMDB
									</a>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
    </div>
  );

}

export default MoviesList;