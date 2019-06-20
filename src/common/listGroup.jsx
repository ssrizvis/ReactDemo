import React from "react";
import PropTypes from "prop-types";
const ListGroup = ({
	onItemSelect,
	selectedItem,
	list,
	textProperty,
	valueProperty
}) => {
	return (
		<React.Fragment>
			<ul className="list-group">
				{list.map(item => (
					<li
						key={item[valueProperty]}
						onClick={() => onItemSelect(item[textProperty])}
						className={
							item[textProperty] === selectedItem
								? "list-group-item active"
								: "list-group-item"
						}
					>
						{item.name}
					</li>
				))}
			</ul>
		</React.Fragment>
	);
};

ListGroup.propTypes = {
	onItemSelect: PropTypes.func,
	active: PropTypes.string,
	list: PropTypes.array.isRequired,
	textProperty: PropTypes.string.isRequired,
	valueProperty: PropTypes.string.isRequired
};

ListGroup.defaultProps = {
	valueProperty: "_id",
	textProperty: "name"
};

export default ListGroup;
