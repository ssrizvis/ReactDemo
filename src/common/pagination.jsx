import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Pagination = ({
	itemsCount,
	pageSize,
	selectedPage,
	onPageChange,
	onClickPrevious,
	onClickNext
}) => {
	let pagesCount = Math.ceil(itemsCount / pageSize);
	let pages = _.range(1, pagesCount + 1);

	if (pagesCount === 1) return null;
	const previousClass = selectedPage === 1 ? "page-item disabled" : "page-item";
	const nextClass =
		selectedPage === pages.length ? "page-item disabled" : "page-item";

	return (
		<nav aria-label="Page navigation example">
			<ul className="pagination">
				<li className={previousClass}>
					<Link to="" className="page-link" onClick={onClickPrevious}>
						Previous
					</Link>
				</li>
				{pages.map(p => {
					return (
						<li
							key={p}
							className={p === selectedPage ? "page-item active" : "page-item"}
						>
							<Link to="" className="page-link" onClick={() => onPageChange(p)}>
								{p}
							</Link>
						</li>
					);
				})}

				<li className={nextClass}>
					<Link
						to=""
						className="page-link"
						onClick={() => onClickNext(pages.length)}
					>
						Next
					</Link>
				</li>
			</ul>
		</nav>
	);
};

Pagination.propTypes = {
	itemsCount: PropTypes.number.isRequired,
	pageSize: PropTypes.number.isRequired,
	selectedPage: PropTypes.number.isRequired,
	onPageChange: PropTypes.func.isRequired,
	onClickPrevious: PropTypes.func,
	onClickNext: PropTypes.func
};

export default Pagination;
