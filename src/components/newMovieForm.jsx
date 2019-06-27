import React, { Component } from "react";
import Form from "../common/form";
import Joi from "joi-browser";
import { addNewMovie } from "../services/fakeMovieService";

class NewMovieForm extends Form {
	state = {
		data: {
			id: "",
			genre: "Romance",
			rate: 0,
			stock: 0,
			liked: false,
			cover_url: "",
			description: "",
			rating: 0,
			title: ""
		},
		errors: {}
	};

	schema = {
		id: Joi.string()
			.required()
			.min(3)
			.max(100)
			.label("Id"),
		genre: Joi.string()
			.required()
			.label("Genre"),
		rate: Joi.number()
			.min(0)
			.max(1000)
			.label("Rate"),
		stock: Joi.number()
			.required()
			.min(0)
			.label("Stock"),
		liked: Joi.boolean()
			.required()
			.label("Liked"),
		cover_url: Joi.string()
			.allow("")
			.label("Cover Url"),
		description: Joi.string()
			.allow("")
			.label("Description"),
		rating: Joi.number()
			.min(0)
			.max(10)
			.label("Rating"),
		title: Joi.string()
			.required()
			.label("Title")
	};

	genres = [
		{ id: 1, value: "Romance", label: "Romance" },
		{ id: 2, value: "Comedy", label: "Comedy" },
		{ id: 3, value: "Thriller", label: "Thriller" },
		{ id: 4, value: "Action", label: "Action" },
		{ id: 5, value: "History", label: "History" }
	];

	liked = [
		{ id: 1, value: false, label: "False" },
		{ id: 2, value: true, label: "True" }
	];

	doSubmit = () => {
		addNewMovie(this.state.data);
		this.props.history.push("/movies");
	};

	render() {
		return (
			<React.Fragment>
				<h1>New Movie Form</h1>
				<div>
					{this.renderInput("id", "Id")}
					{this.renderSelect("genre", "Genre", this.genres)}
					{this.renderInput("rate", "Rate", "number")}
					{this.renderInput("stock", "Stock", "number")}
					{this.renderSelect("liked", "Liked", this.liked)}
					{this.renderInput("cover_url", "Cover Url")}
					{this.renderInput("description", "Description")}
					{this.renderInput("rating", "Rating", "number")}
					{this.renderInput("title", "Title")}
					{this.renderSubmitButton("Submit")}
				</div>
			</React.Fragment>
		);
	}
}

export default NewMovieForm;
