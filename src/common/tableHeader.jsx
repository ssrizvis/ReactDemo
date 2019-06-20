import React, { Component } from "react";

class TableHeader extends Component {
	raiseSort(path) {
		let sortColumn = { ...this.props.sortColumn };
		if (sortColumn.path === path)
			sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
		else sortColumn = { path: path, order: "asc" };
		this.props.onSort(sortColumn);
	}

	renderSortIcon = column => {
		const { sortColumn } = this.props;
		if (column.path !== sortColumn.path) return null;
		if (sortColumn.order === "asc") return <i className="fa fa-sort-asc m-2" />;
		return <i className="fa fa-sort-desc m-2" />;
	};

	render() {
		return (
			<thead>
				<tr>
					{this.props.headers.map(header => (
						<th
							className="clickable"
							key={header.path || header.key}
							onClick={() => this.raiseSort(header.path)}
						>
							{header.label}
							{this.renderSortIcon(header)}
						</th>
					))}
				</tr>
			</thead>
		);
	}
}

export default TableHeader;
