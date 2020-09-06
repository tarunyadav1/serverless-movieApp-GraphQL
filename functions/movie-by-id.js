const movies = require("../data/movies.json");

exports.handler = async ({ queryStringParameters }) => {
  const movie = movies.find((m) => m.id === queryStringParameters.id);

  if (!movie) {
    return {
      statusCode: 404,
      body: "NOT FOUND",
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(movie),
  };
};
