import { movies$ } from "../../db-simu/movies";

export const MOVIES_FETCH_LIST = "MOVIES_FETCH_LIST";
export const MOVIES_LIKE_DISLIKE_MOVIE = "MOVIES_LIKE_DISLIKE_MOVIE";
export const MOVIES_DELETE_MOVIE = "MOVIES_DELETE_MOVIE";

// MOVIES_FETCH_LIST
export const fetchMoviesList = () => {
	return async (dispatch) => {
		try {
			const moviesList = await movies$;

			if (moviesList) {
				dispatch({ type: MOVIES_FETCH_LIST, moviesList });
			}

			return !!moviesList;
		} catch (error) {
			console.log("ERROR in Movies Actions - fetchMoviesList - error = ", error);
			return false;
		}
	};
};

// MOVIES_LIKE_DISLIKE_MOVIE
export const likeDislikeMovie = (params) => {
	return async (dispatch, getState) => {
		try {
			const { movieId, isLike } = params;

			if (!movieId || !(isLike === true || isLike === false)) {
				return false;
			}

			dispatch({ type: MOVIES_LIKE_DISLIKE_MOVIE, params });

			return true;
		} catch (error) {
			console.log("ERROR in Movies Actions - likeDislikeMovie - error = ", error);
			return false;
		}
	};
};

// MOVIES_DELETE_MOVIE
export const deleteMovie = (movieId) => {
	return async (dispatch) => {
		try {
			if (!movieId) {
				return false;
			}

			dispatch({ type: MOVIES_DELETE_MOVIE, movieId });

			return true;
		} catch (error) {
			console.log("ERROR in Movies Actions - deleteMovie - error = ", error);
			return false;
		}
	};
};
