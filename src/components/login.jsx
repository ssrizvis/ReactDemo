import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";

class Login extends Form {
	state = {
		data: { username: "", password: "" },
		errors: {}
	};

	schema = {
		username: Joi.string()
			.required()
			.min(5)
			.max(25)
			.label("Username"),
		password: Joi.string()
			.required()
			.min(8)
			.max(15)
			.label("Password")
	};

	doSubmit = () => {
		//call server
	};

	render() {
		return (
			<div>
				<h1>Login</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput("username", "Username")}
					{this.renderInput("password", "Password", "password")}
					{this.renderSubmitButton("Login")}
				</form>
			</div>
		);
	}
}

export default Login;
