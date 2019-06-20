import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

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
					<a className="page-link" onClick={onClickPrevious}>
						Previous
					</a>
				</li>
				{pages.map(p => {
					return (
						<li
							key={p}
							className={p === selectedPage ? "page-item active" : "page-item"}
						>
							<a className="page-link" onClick={() => onPageChange(p)}>
								{p}
							</a>
						</li>
					);
				})}

				<li className={nextClass}>
					<a className="page-link" onClick={() => onClickNext(pages.length)}>
						Next
					</a>
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
