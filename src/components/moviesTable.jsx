import React, { Component } from "react";
import Like from "../common/like";
import Table from "../common/table";

class MoviesTable extends Component {
	columns = [
		{ path: "title", label: "Title" },
		{ path: "genre", label: "Genre" },
		{ path: "stock", label: "Stock" },
		{ path: "rate", label: "Rate" },
		{
			key: "like",
			content: movie => (
				<Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
			)
		},
		{
			key: "delete",
			content: movie => (
				<button
					className="btn btn-danger"
					onClick={() => this.props.onDelete(movie)}
				>
					Delete
				</button>
			)
		}
	];

	render() {
		const { movies, onSort, sortColumn } = this.props;
		return (
			<Table
				data={movies}
				onSort={onSort}
				sortColumn={sortColumn}
				columns={this.columns}
			/>
		);
	}
}

export default MoviesTable;
