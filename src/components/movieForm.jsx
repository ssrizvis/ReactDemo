import React, { Component } from "react";

class MovieForm extends Component {
	state = {};
	render() {
		return (
			<div>
				<h1>Movie Form {this.props.match.params.id}</h1>
				<button
					className="btn btn-primary"
					onClick={() => this.props.history.push("/movies")}
				>
					Save
				</button>
			</div>
		);
	}
}

export default MovieForm;
