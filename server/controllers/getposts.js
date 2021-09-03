const getPostsQuery = require("../database/queries/getpostQueries");

const getPosts = (req, res) => {
  getPostsQuery()
    .then((data) => {res.json(data.rows)})
    .catch(err => res.status(500).json({message: "internal server error" , error: err}));
};

module.exports = getPosts;