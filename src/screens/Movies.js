import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import MoviesCatFilter from "../components/Movies/MoviesCatFilter";
import MovieCard from "../components/Movies/MovieCard";
import MoviesPagination from "../components/Movies/MoviesPagination";
import Loader from "../components/common/Loader";
import * as moviesActions from "../store/actions/movies";
import "./Movies.css";

const listNbrMoviesPerPage = [4, 8, 12];

function Movies() {
	const [isFetchDone, setIsFetchDone] = useState(false);
	const [currentCat, setCurrentCat] = useState(null);
	const [currentNbrMoviesPerPage, setCurrentNbrMoviesPerPage] = useState(12);
	const [currentPageIndex, setCurrentPageIndex] = useState(0);
	const [nbrTotalPages, setNbrTotalPages] = useState(null);
	const [isPreviousPageDisabled, setIsPreviousPageDisabled] = useState(null);
	const [isNextPageDisabled, setIsNextPageDisabled] = useState(null);
	const [globalError, setGlobalError] = useState(null);

	const moviesListState = useSelector((state) => state.movies.list); // from Redux store
	const [moviesListToShow, setMoviesListToShow] = useState(null); // shown, after applying filter and pagination

	const dispatch = useDispatch();

	const handleFetchMoviesList = useCallback(async () => {
		try {
			await dispatch(moviesActions.fetchMoviesList());
		} catch (error) {
			console.error("ERROR in Movies - handleFetchMoviesList - error while fetching movies list - error = ", error);
			setGlobalError(error);
		}
		setIsFetchDone(true);
	}, [dispatch]);

	useEffect(() => {
		handleFetchMoviesList();
	}, [handleFetchMoviesList]);

	// refresh
	useEffect(
		() => {
			// filter / categories
			let newCurrentCat = currentCat;
			if (currentCat && !moviesListState.some((movie) => movie.category === currentCat)) {
				newCurrentCat = null;
				setCurrentCat(newCurrentCat);
			}
			const newMoviesOfTheCurrentCat = moviesListState.filter((movie) => !newCurrentCat || movie.category === newCurrentCat);

			// pagination
			const newNbrTotalPages = Math.ceil(newMoviesOfTheCurrentCat.length / currentNbrMoviesPerPage);
			if (newNbrTotalPages !== nbrTotalPages) {
				setNbrTotalPages(newNbrTotalPages);
			}
			let newCurrentPageIndex = currentPageIndex;
			if (currentPageIndex > newNbrTotalPages - 1) {
				newCurrentPageIndex = 0;
				setCurrentPageIndex(newCurrentPageIndex);
			}
			setIsPreviousPageDisabled(newCurrentPageIndex === 0);
			setIsNextPageDisabled(newCurrentPageIndex === newNbrTotalPages - 1 || newNbrTotalPages === 0);

			// movies to show
			const newMoviesListToShow = newMoviesOfTheCurrentCat.slice(
				newCurrentPageIndex * currentNbrMoviesPerPage,
				Math.min((newCurrentPageIndex + 1) * currentNbrMoviesPerPage, newMoviesOfTheCurrentCat.length)
			);
			setMoviesListToShow(newMoviesListToShow);

			if (newMoviesListToShow.length === 0 && newMoviesOfTheCurrentCat.length > 0) {
				setCurrentPageIndex(0);
			}
		},
		// eslint-disable note: only nbrTotalPages was missing as a dependency, but it is calculated, it's a consequence but not a cause, it must not re-render the component
		// eslint-disable-next-line
		[moviesListState, currentCat, currentPageIndex, currentNbrMoviesPerPage]
	);

	// filter / categories

	const handleCatChange = (newCategory) => {
		if (newCategory === "") {
			newCategory = null;
		}
		setCurrentCat(newCategory);
	};

	// like / dislike

	const handleLikeDislike = (params) => {
		try {
			dispatch(moviesActions.likeDislikeMovie(params));
		} catch (error) {
			console.error("ERROR in Movies - handleLikeDislike - error while voting - error = ", error);
			setGlobalError(error);
		}
	};

	// delete

	const handleDelete = (movieId) => {
		try {
			dispatch(moviesActions.deleteMovie(movieId));
		} catch (error) {
			console.error("ERROR in Movies - handleDelete - error while deleting - error = ", error);
			setGlobalError(error);
		}
	};

	// pagination

	const handleChangeNbrMoviesPerPage = (newNbrMoviesPerPage) => {
		setCurrentNbrMoviesPerPage(newNbrMoviesPerPage);
	};

	const handlePreviousPage = () => {
		if (currentPageIndex > 0) {
			setCurrentPageIndex(currentPageIndex - 1);
		}
	};

	const handleNextPage = () => {
		if (currentPageIndex < nbrTotalPages - 1) {
			setCurrentPageIndex(currentPageIndex + 1);
		}
	};

	// render

	const isMoviesListToShowReady = isFetchDone && moviesListToShow;

	const catFilter = isMoviesListToShowReady && (
		<MoviesCatFilter
			categories={moviesListState.map((movie) => movie.category).filter((catName, index, cats) => cats.indexOf(catName) === index)}
			handleCatChange={handleCatChange}
		/>
	);

	const moviesCards =
		isMoviesListToShowReady && moviesListState.length > 0 ? (
			moviesListToShow.map((movie) => <MovieCard key={movie.id} movie={movie} handleLikeDislike={handleLikeDislike} handleDelete={handleDelete} />)
		) : (
			<p>No movie left...</p>
		);

	const moviesPagination = isMoviesListToShowReady && (
		<MoviesPagination
			isPreviousPageDisabled={isPreviousPageDisabled}
			handlePreviousPage={handlePreviousPage}
			listNbrMoviesPerPage={listNbrMoviesPerPage}
			currentNbrMoviesPerPage={currentNbrMoviesPerPage}
			handleChangeNbrMoviesPerPage={handleChangeNbrMoviesPerPage}
			isNextPageDisabled={isNextPageDisabled}
			handleNextPage={handleNextPage}
		/>
	);

	return (
		<div className="movies">
			<div className="movies-title-container">
				<h1 className="movies-title-content">Top Movies</h1>
			</div>

			{isMoviesListToShowReady && <div className="movies-catfilter">{catFilter}</div>}

			{isMoviesListToShowReady && <div className="movies-cards-container">{moviesCards}</div>}

			{isMoviesListToShowReady && <div className="movies-pagination">{moviesPagination}</div>}

			{!isMoviesListToShowReady && <Loader />}

			{globalError && <div className="error">{globalError}</div>}
		</div>
	);
}

export default Movies;
