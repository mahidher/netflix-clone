const movieData = [
  {
    title: "Top Rated",
    url: `/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`,
  },
  {
    title: "Popular",
    url: `/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`,
  },
  {
    title: "Latest",
    url: `/movie/latest?api_key=${process.env.API_KEY}&language=en-US`,
  },
  {
    title: "Upcoming",
    url: `/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`,
  },
];

export default movieData;
