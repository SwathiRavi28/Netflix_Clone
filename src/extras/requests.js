const TMDB_API_KEY = '657c321028743ce5116c0e7058badc04';

const requests = {
  baseUrl: `https://image.tmdb.org/t/p/original/`,
  fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${TMDB_API_KEY}&language=en-US`,
  fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${TMDB_API_KEY}&with_networks=213`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US`,
  fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=28`,
  fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=35`,
  fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=27`,
  fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10749`,
  fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=99`,
  fetchSeries: `https://api.themoviedb.org/3/trending/tv/week?api_key=${TMDB_API_KEY}&language=en-US`,
  fetchPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US`,

}

export default requests;