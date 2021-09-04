const getPostsQuery = require("../../database/queries/posts/getpostQueries");

const getPosts = (req, res) => {
  getPostsQuery()
    .then(data => console.log(res.json(data)))
    .catch(err => res.status(500).json({message: "internal server error" , error: err}));
};

module.exports = getPosts;