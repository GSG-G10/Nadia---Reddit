const connection = require('../../config/connection');

const getpostsQuery = () => connection.query(
  'SELECT * FROM posts;',
  );
  module.exports = getpostsQuery;