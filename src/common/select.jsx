import React from "react";

const Select = ({ options, name, label, value, onChange }) => {
	return (
		<div className="form-group">
			<label htmlFor={name}>{label}</label>
			<select
				className="form-control"
				value={value}
				onChange={e => onChange(e)}
				name={name}
			>
				{options.map(option => (
					<option key={option.id} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};

export default Select;
