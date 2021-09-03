const connection = require('../config/connection');

const getpostsQuery = () => connection.query(
    'SELECT p.id, p.title, p.post, p.likes, p.time_create, u.name, u.username FROM posts p INNER JOIN users u ON u.id = p.user_id ORDER BY p.likes DESC;',
  );
  module.exports = getpostsQuery;