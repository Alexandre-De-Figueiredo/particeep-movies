const movies = [
	{
		id: "1",
		title: "Oceans 8",
		imgSrc: "https://imgsrc.cineserie.com/2021/08/wp3051375-oceans-8-wallpapers.jpg?ver=1",
		category: "Comedy",
		likes: 4,
		dislikes: 1,
	},
	{
		id: "2",
		title: "Midnight Sun",
		imgSrc: "https://wallpaperaccess.com/full/3524235.jpg",
		category: "Comedy",
		likes: 2,
		dislikes: 0,
	},
	{
		id: "3",
		title: "Les indestructibles 2",
		imgSrc: "https://images8.alphacoders.com/923/thumb-1920-923701.jpg",
		category: "Animation",
		likes: 3,
		dislikes: 1,
	},
	{
		id: "4",
		title: "Sans un bruit",
		imgSrc: "https://www.sitegeek.fr/wp-content/uploads/2018/04/Sans-un-Bruit-A-Quiet-place.jpg",
		category: "Thriller",
		likes: 6,
		dislikes: 6,
	},
	{
		id: "5",
		title: "Creed II",
		imgSrc: "https://s1.best-wallpaper.net/wallpaper/m/1811/2018-movie-Creed-II_m.jpg",
		category: "Drame",
		likes: 16,
		dislikes: 2,
	},
	{
		id: "6",
		title: "Pulp Fiction",
		imgSrc: "https://wallpaper.dog/large/20356992.jpg",
		category: "Thriller",
		likes: 11,
		dislikes: 3,
	},
	{
		id: "7",
		title: "Pulp Fiction",
		imgSrc: "https://p4.wallpaperbetter.com/wallpaper/577/859/617/movies-pulp-fiction-uma-thurman-smokes-cigarettes-1920x1080-entertainment-movies-hd-art-wallpaper-preview.jpg",
		category: "Thriller",
		likes: 12333,
		dislikes: 32,
	},
	{
		id: "8",
		title: "Seven",
		imgSrc: "https://w0.peakpx.com/wallpaper/77/986/HD-wallpaper-movie-se7en-brad-pitt-morgan-man.jpg",
		category: "Thriller",
		likes: 2,
		dislikes: 1,
	},
	{
		id: "9",
		title: "Inception",
		imgSrc: "https://images2.alphacoders.com/851/thumb-1920-85182.jpg",
		category: "Thriller",
		likes: 2,
		dislikes: 1,
	},
	{
		id: "10",
		title: "Gone Girl",
		imgSrc: "https://www1.alliancefr.com/wp-content/uploads/bqimages/Gone-Girl.jpg",
		category: "Thriller",
		likes: 22,
		dislikes: 12,
	},
];

export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies));
