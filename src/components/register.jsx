import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";

class Register extends Form {
	state = {
		data: {
			username: "",
			password: "",
			name: ""
		},
		errors: {}
	};

	schema = {
		username: Joi.string()
			.required()
			.email()
			.min(6)
			.max(30)
			.label("Username"),
		password: Joi.string()
			.required()
			.min(8)
			.max(15)
			.label("Password"),
		name: Joi.string()
			.required()
			.min(3)
			.max(25)
			.label("Username")
	};

	doSubmit = () => {
		console.log(this.state.data);
	};

	render() {
		return (
			<React.Fragment>
				<h1>Register</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput("username", "Username")}
					{this.renderInput("password", "Password", "password")}
					{this.renderInput("name", "Name")}
					{this.renderSubmitButton("Register")}
				</form>
			</React.Fragment>
		);
	}
}

export default Register;
