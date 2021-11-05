import React from "react";

import "./MovieCard.css";
import { commonSvgs } from "../../constants/common";

function MovieCard({ movie, handleLikeDislike, handleDelete }) {
	const isUserLike = movie.hasUserLiked === true ? 1 : 0;
	const isUserDislike = movie.hasUserLiked === false ? 1 : 0;
	const userLikePt = isUserLike ? 1 : 0;
	const userDislikePt = isUserDislike ? 1 : 0;

	const likePercentage = ((movie.likes + userLikePt) / (movie.likes + userLikePt + (movie.dislikes + userDislikePt))) * 100;

	const onClickLike = () => {
		handleLikeDislike({ movieId: movie.id, isLike: true });
	};

	const onClickDislike = () => {
		handleLikeDislike({ movieId: movie.id, isLike: false });
	};

	const onClickDelete = () => {
		handleDelete(movie.id);
	};

	return (
		<div className="moviecard">
			<div className="moviecard-title-container">
				<h2 className="moviecard-title-content">{movie.title}</h2>
			</div>

			<div className="moviecard-image-container">
				<img src={movie.imgSrc} alt={movie.title} className="moviecard-image-content" />
			</div>

			<div className="moviecard-likesratio">
				<div className="moviecard-likesratio-likedislikebuttons">
					<div className="moviecard-likesratio-likedislikebuttons-button">
						<div onClick={onClickLike} className={`moviecard-likesratio-likedislikebuttons-button-thumb${isUserLike ? " active" : ""}`}>
							{commonSvgs.thumb.up(isUserLike)}
						</div>
						<div className="moviecard-likesratio-likedislikebuttons-button-count-container">
							<p className="moviecard-likesratio-likedislikebuttons-button-count-content">{movie.likes + userLikePt}</p>
						</div>
					</div>

					<div className="moviecard-likesratio-likedislikebuttons-button">
						<div onClick={onClickDislike} className={`moviecard-likesratio-likedislikebuttons-button-thumb${isUserDislike ? " active" : ""}`}>
							{commonSvgs.thumb.down(isUserDislike)}
						</div>
						<div className="moviecard-likesratio-likedislikebuttons-button-count-container">
							<p className="moviecard-likesratio-likedislikebuttons-button-count-content">{movie.dislikes + userDislikePt}</p>
						</div>
					</div>
				</div>
				<div className="moviecard-likesratio-bar-total">
					<div className="moviecard-likesratio-bar-likes" style={{ width: `${likePercentage}%` }}></div>
				</div>
			</div>

			<div className="moviecard-category-container">
				<h3 className="moviecard-category-content">{movie.category}</h3>
			</div>

			<div onClick={onClickDelete} className="moviecard-delete">
				<div className="moviecard-delete-cross">X</div>
			</div>
		</div>
	);
}

export default MovieCard;
