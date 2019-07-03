let movies = [
	{
		id: "4fede17c312f912796000034",
		genre: "Comedy",
		rate: 510,
		stock: 25,
		liked: true,
		cover_url: null,
		description: null,
		rating: 6.3,
		title: "L'affaire Gordji, histoire d'une cohabitation"
	},
	{
		id: "4fede17f312f912796000035",
		genre: "Romance",
		rate: 100,
		stock: 50,
		liked: true,
		cover_url: null,
		description:
			"Documentary telling the true story of the sinking of the liner Laconia by a German U-boat in 1942 through the eyes of six survivors.",
		rating: 6.8,
		title: "Le naufrage du Laconia - partie 1"
	},
	{
		id: "4fede181312f912796000036",
		genre: "Horror",
		rate: 150,
		stock: 225,
		liked: true,
		cover_url: null,
		description:
			"Documentary telling the true story of the sinking of the liner Laconia by a German U-boat in 1942 through the eyes of six survivors.",
		rating: 6.8,
		title: "Le naufrage du Laconia - partie 2"
	},
	{
		id: "4fede184312f912796000037",
		genre: "Thriller",
		rate: 910,
		stock: 55,
		liked: true,
		cover_url:
			"http://ia.media-imdb.com/images/M/MV5BMjAyMTg0MjgwOV5BMl5BanBnXkFtZTcwNTEzODY4Mw@@._V1._SX94_SY140_.jpg",
		description:
			"The extraordinary story of three Rwandan kids who walk 3000 miles to the Soccer World Cup in South Africa...",
		rating: 6.2,
		title: "Africa United"
	},
	{
		id: "4fede186312f912796000038",
		genre: "History",
		rate: 105,
		stock: 50,
		liked: true,
		cover_url:
			"http://ia.media-imdb.com/images/M/MV5BMjAyNDcxNTk3NV5BMl5BanBnXkFtZTcwMjk4MDU2NA@@._V1._SX94_SY140_.jpg",
		description:
			"A young man is rocked by two announcements from his elderly father: that he has terminal cancer, and that he has a young male lover.",
		rating: 7.2,
		title: "Beginners"
	},
	{
		id: "4fede18a312f912796000039",
		genre: "Comedy",
		rate: 1000,
		stock: 500,
		liked: true,
		cover_url:
			"http://ia.media-imdb.com/images/M/MV5BMjIzMjY4MTk2M15BMl5BanBnXkFtZTcwNzQ3ODg3NQ@@._V1._SX94_SY140_.jpg",
		description:
			"A kid from the Midwest moves out to Hollywood in order to follow in his parents footsteps -- and become a porn star.",
		rating: 3.0,
		title: "Bucky Larson : Born to Be a Star"
	},
	{
		id: "4fede18d312f91279600003a",
		genre: "Romance",
		rate: 510,
		stock: 95,
		liked: true,
		cover_url:
			"http://ia.media-imdb.com/images/M/MV5BMTU1ODkyNDkwOV5BMl5BanBnXkFtZTcwNzI2MTcyMQ@@._V1._SX94_SY140_.jpg",
		description:
			"The story of what happens after a master thief achieves his last big score, when the FBI agent who promised he'd capture him is about to do just that.",
		rating: 6.2,
		title: "Coup d'\u00e9clat"
	},
	{
		id: "4fede190312f91279600003b",
		genre: "Thriller",
		rate: 101,
		stock: 55,
		liked: true,
		cover_url: null,
		description:
			"D'un film \u00e0 l'autre (From One Film to Another) is an anthology documentary produced by Les Films 13...",
		rating: 6.4,
		title: "D'un film \u00e0 l'autre"
	},
	{
		id: "4fede193312f91279600003c",
		genre: "Action",
		rate: 180,
		stock: 57,
		liked: true,
		cover_url:
			"http://ia.media-imdb.com/images/M/MV5BMjI2NTk5NjkzOV5BMl5BanBnXkFtZTcwODgwODg0NA@@._V1._SX94_SY140_.jpg",
		description:
			"This is not the way it was supposed to happen. Like every other morning, Christian Echeveria, huissier...",
		rating: 5.8,
		title: "Dernier \u00e9tage, gauche, gauche"
	},
	{
		id: "4fede198312f91279600003d",
		genre: "Horror",
		rate: 120,
		stock: 95,
		liked: true,
		cover_url: null,
		description:
			"An investigation on the management of 2009 L'Aquila earthquake by Berlusconi government and his staff.",
		rating: 7.7,
		title: "Draquila : l'Italie qui tremble"
	},
	{
		id: "4fede19c312f91279600003e",
		genre: "Comedy",
		rate: 410,
		stock: 45,
		liked: true,
		cover_url:
			"http://ia.media-imdb.com/images/M/MV5BMjEzODQ0MzEwMl5BMl5BanBnXkFtZTcwNzI4MTgwNg@@._V1._SX94_SY140_.jpg",
		description:
			"An exiled detective is recruited to solve a series of mysterious deaths that threaten to delay the inauguration of Empress Wu.",
		rating: 6.6,
		title: "D\u00e9tective Dee : le myst\u00e8re de la flamme fant\u00f4me"
	},
	{
		id: "4fede19c312f91279600003f",
		genre: "Comedy",
		rate: 410,
		stock: 45,
		liked: true,
		cover_url:
			"http://ia.media-imdb.com/images/M/MV5BMjEzODQ0MzEwMl5BMl5BanBnXkFtZTcwNzI4MTgwNg@@._V1._SX94_SY140_.jpg",
		description:
			"An exiled detective is recruited to solve a series of mysterious deaths that threaten to delay the inauguration of Empress Wu.",
		rating: 6.6,
		title: "D\u00e9tective Dee : le myst\u00e8re de la flamme fant\u00f4me"
	},
	{
		id: "4fede19c312f91279600003g",
		genre: "Comedy",
		rate: 410,
		stock: 45,
		liked: true,
		cover_url:
			"http://movieges/M/MV5BMjEzODQ0MzEwMl5BMl5BanBnXkFtZTcwNzI4MTgwNg@@._V1._SX94_SY140_.jpg",
		description:
			"An exiled detective is recruited to solve a series of mysterious deaths that threaten to delay the inauguration of Empress Wu.",
		rating: 6.6,
		title: "D\u00e9tective Dee : le myst\u00e8re de la flamme fant\u00f4me"
	},
	{
		id: "4fede19c312f91279600003h",
		genre: "Comedy",
		rate: 410,
		stock: 45,
		liked: true,
		cover_url:
			"http://ia.media-imdb.com/images/M/MV5BMjEzODQ0MzEwMl5BMl5BanBnXkFtZTcwNzI4MTgwNg@@._V1._SX94_SY140_.jpg",
		description:
			"An exiled detective is recruited to solve a series of mysterious deaths that threaten to delay the inauguration of Empress Wu.",
		rating: 6.6,
		title: "D\u00e9tective Dee : le myst\u00e8re de la flamme fant\u00f4me"
	}
];

export function addNewMovie(movie) {
	const movieInArray = getMovie(movie.id);
	if (!movieInArray) movies.push(movie);
}

export function getMovie(id) {
	return movies.find(mov => mov.id === id);
}

export function getMovieList() {
	return movies;
}

export function updateMovie(id, data) {
	const movie = getMovie(id);
	const index = movies.indexOf(movie);
	movies[index] = data;
}

export function deleteMovie(movie) {
	movies.splice(movies.indexOf(movie), 1);
}
