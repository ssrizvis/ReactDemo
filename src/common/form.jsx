import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";

class Form extends Component {
	state = {
		data: {},
		errors: {}
	};

	validate = () => {
		const options = { abortEarly: false };
		const { error } = Joi.validate(this.state.data, this.schema, options);
		if (!error) return null;

		const errors = {};
		for (let item of error.details) errors[item.path[0]] = item.message;
		return errors;
	};

	validateProperty = ({ name, value }) => {
		const obj = { [name]: value };
		const schema = { [name]: this.schema[name] };
		const { error } = Joi.validate(obj, schema);
		return error ? error.details[0].message : null;
	};

	handleSubmit = e => {
		e.preventDefault();
		const errors = this.validate();
		this.setState({ errors: errors || {} });
		if (errors) return;
		this.doSubmit();
	};

	handleOnChange = ({ currentTarget: input }) => {
		const data = { ...this.state.data };
		data[input.name] = input.value;
		const error = this.validateProperty(input);
		const errors = { ...this.state.errors };
		errors[input.name] = error;
		if (errors[input.name] && !error) delete errors[input.name];
		this.setState({ data, errors });
	};

	renderInput = (name, label, type = "text") => {
		const { data, errors } = this.state;
		return (
			<Input
				name={name}
				label={label}
				type={type}
				value={data[name]}
				onChange={this.handleOnChange}
				error={errors[name]}
			/>
		);
	};

	renderSelect = (name, label, options) => {
		const { data, errors } = this.state;
		return (
			<Select
				name={name}
				label={label}
				selected={data[name]}
				options={options}
				value={data[name]}
				onChange={this.handleOnChange}
				error={errors[name]}
			/>
		);
	};

	renderSubmitButton = label => {
		return (
			<button
				disabled={this.validate()}
				onClick={this.handleSubmit}
				className="btn btn-primary"
			>
				{label}
			</button>
		);
	};
}

export default Form;
