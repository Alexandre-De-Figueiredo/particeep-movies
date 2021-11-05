import React from "react";

import "./MoviesPagination.css";

function MoviesPagination({
	isPreviousPageDisabled,
	handlePreviousPage,

	listNbrMoviesPerPage,
	currentNbrMoviesPerPage,
	handleChangeNbrMoviesPerPage,

	isNextPageDisabled,
	handleNextPage,
}) {
	const onChangeNbrMoviesPerPage = (event) => {
		const newNbrMoviesPerPage = event.target.value;
		handleChangeNbrMoviesPerPage(newNbrMoviesPerPage);
	};

	return (
		<div className="movies-pagination-container">
			<div>
				<button disabled={isPreviousPageDisabled} onClick={handlePreviousPage} className="movies-pagination-previous">
					{"<"}
				</button>
			</div>

			<div className="movies-pagination-nbrperpage">
				<select value={currentNbrMoviesPerPage} onChange={onChangeNbrMoviesPerPage} className="movies-pagination-nbrperpage-select">
					{listNbrMoviesPerPage.map((nbrPerPage) => (
						<option value={nbrPerPage} key={nbrPerPage} className="movies-pagination-nbrperpage-option">
							{`${nbrPerPage} / page`}
						</option>
					))}
				</select>
			</div>

			<div>
				<button disabled={isNextPageDisabled} onClick={handleNextPage} className="movies-pagination-next">
					{">"}
				</button>
			</div>
		</div>
	);
}

export default MoviesPagination;
