import React from "react";

const Select = ({ options, name, label, selected, onChange }) => {
	return (
		<div className="form-group">
			<label htmlFor={name}>{label}</label>
			<select className="form-control" onChange={e => onChange(e)} name={name}>
				{options.map(option => (
					<option
						key={option.id}
						selected={selected == option.value}
						value={option.value}
					>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};

export default Select;
