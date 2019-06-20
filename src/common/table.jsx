import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ onSort, columns, sortColumn, data }) => {
	return (
		<table className="table table-striped">
			<TableHeader headers={columns} onSort={onSort} sortColumn={sortColumn} />
			<TableBody data={data} columns={columns} />
		</table>
	);
};

export default Table;
