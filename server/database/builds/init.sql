BEGIN;
DROP TABLE IF EXISTS users, posts, comments CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(300) NOT NULL,
    username VARCHAR(300) NOT NULL,
    email VARCHAR(300)NOT NULL,
    password VARCHAR (300) NOT NULL
);

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    title VARCHAR(300) NOT NULL,
    post TEXT NOT NULL,
    likes INTEGER NOT NULL DEFAULT 0,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    time_create TIMESTAMP NOT NULL

);
CREATE TABLE comments(
    id SERIAL PRIMARY KEY ,
    post TEXT NOT NULL ,
    likes INTEGER NOT NULL DEFAULT 0,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
    time_create TIMESTAMP NOT NULL
);

INSERT INTO users (name , username , email , password) VALUES
('Nadia',"nadia tamimi" 'nadia.tamimi@hotmail.com', "password");

INSERT INTO posts (title,post,user_id,created_at)VALUES
('test title' , 'test body' , 1 , 'NOW()');

INSERT INTO posts (body,user_id,,post_id,created_at)VALUES
('text' , 'test body' , 1 , 'NOW()');

COMMIT;