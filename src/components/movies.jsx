import React, { Component } from "react";
import { getMovieList } from "../services/fakeMovieService";
import Pagination from "../common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "../common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import _ from "lodash";

class Movies extends Component {
	state = {
		moviesList: [],
		selectedPage: 1,
		pageSize: 4,
		genres: [],
		selectedGenre: "All",
		sortColumn: { path: "title", order: "asc" }
	};

	componentDidMount() {
		this.setState({
			moviesList: getMovieList(),
			genres: [{ _id: "000", name: "All" }, ...getGenres()]
		});
	}

	_handleLike = movie => {
		const moviesList = [...this.state.moviesList];
		const index = moviesList.indexOf(movie);
		moviesList[index].liked = !moviesList[index].liked;
		this.setState({ moviesList });
	};

	_handleDelete = movie => {
		const movies = this.state.moviesList.filter(
			movieInstance => movieInstance !== movie
		);
		this.setState({ moviesList: movies });
	};

	_handleSort = sortColumn => {
		this.setState({ sortColumn });
	};

	_handlePageChange = page => this.setState({ selectedPage: page });

	_handlePreviousPage = () => {
		if (this.state.selectedPage !== 1)
			this.setState({ selectedPage: this.state.selectedPage - 1 });
	};

	_handleNextPage = lastPage => {
		if (this.state.selectedPage < lastPage)
			this.setState({ selectedPage: this.state.selectedPage + 1 });
	};

	_handleFilterMovies = genre => {
		let moviesList = getMovieList();
		if (genre !== "All")
			moviesList = moviesList.filter(movie => movie.genre === genre);
		this.setState({ moviesList, selectedGenre: genre, selectedPage: 1 });
	};

	getPagedData = () => {
		const { pageSize, selectedPage, moviesList, sortColumn } = this.state;

		let movies = _.orderBy(moviesList, [sortColumn.path], [sortColumn.order]);
		movies = paginate(movies, selectedPage, pageSize);

		return { movies: movies, totalLength: moviesList.length };
	};

	render() {
		const {
			pageSize,
			selectedPage,
			moviesList,
			selectedGenre,
			genres,
			sortColumn
		} = this.state;

		if (moviesList.length === 0)
			return <h1>There are no movies is the Database!</h1>;

		const { movies, totalLength } = this.getPagedData();

		return (
			<React.Fragment>
				<div className="row">
					<h1 style={{ margin: "auto", width: "70%", padding: "10px" }}>
						Showing {totalLength} movies of Database
					</h1>
					<br />
				</div>
				<div className="row">
					<div className="col-2">
						<ListGroup
							onItemSelect={this._handleFilterMovies}
							selectedItem={selectedGenre}
							list={genres}
						/>
					</div>
					<div className="col">
						<MoviesTable
							movies={movies}
							sortColumn={sortColumn}
							onLike={this._handleLike}
							onDelete={this._handleDelete}
							onSort={this._handleSort}
						/>
						<Pagination
							itemsCount={totalLength}
							pageSize={pageSize}
							onClickPrevious={this._handlePreviousPage}
							onClickNext={this._handleNextPage}
							selectedPage={selectedPage}
							onPageChange={this._handlePageChange}
						/>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Movies;
