import { MOVIES_FETCH_LIST, MOVIES_LIKE_DISLIKE_MOVIE, MOVIES_DELETE_MOVIE } from "../actions/movies";

const initialState = {
	list: [],
};

function actions(state = initialState, action) {
	switch (action.type) {
		case MOVIES_FETCH_LIST:
			return {
				// ...state,
				list: action.moviesList,
			};

		case MOVIES_LIKE_DISLIKE_MOVIE:
			const { movieId, isLike } = action.params;

			let newList = [...state.list];
			let targetMovie = newList.find((movie) => movie.id === movieId);

			// double toggle like / dislike (if user had already liked or disliked)
			if (targetMovie.hasUserLiked === isLike) {
				targetMovie.hasUserLiked = null;
			} else {
				targetMovie.hasUserLiked = isLike;
			}

			return {
				// ...state,
				list: newList,
			};

		case MOVIES_DELETE_MOVIE:
			return {
				// ...state,
				list: [...state.list.filter((movie) => movie.id !== action.movieId)],
			};

		default:
			return state;
	}
}

export default actions;
