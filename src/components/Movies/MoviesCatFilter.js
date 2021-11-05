import React from "react";

function MoviesCatFilter({ categories, handleCatChange }) {
	const isAtLeastOneCategory = categories && categories.length > 0;

	const onChangeCat = (event) => {
		const newCategory = event.target.value;
		handleCatChange(newCategory);
	};

	if (isAtLeastOneCategory) {
		categories = ["All Categories", ...categories];
	}

	return (
		<select onChange={onChangeCat} className="movies-catfilter-select">
			{isAtLeastOneCategory ? (
				categories.map((category, index) => (
					<option value={index !== 0 ? category : ""} key={index !== 0 ? category : "title"} className="movies-catfilter-option">
						{category}
					</option>
				))
			) : (
				<option className="movies-catfilter-option">No Category</option>
			)}
		</select>
	);
}

export default MoviesCatFilter;
