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
('Nadia','nadiatamimi', 'nadia.tamimi@hotmail.com', 'password'),
('Mara','Mara','mara.345@gmail.con','67575757'),
('filipo','FLPO' ,'FLPO23@gmail.com','anguria'),
('Ezabella','Ezabella','Eza@hotmail.com','como');

INSERT INTO posts (title,post,user_id,time_create)VALUES
('test title' , 'test body' , 1 , 'NOW()'),
('sport','messi rah mn barchalona', 1 , '2016-06-22 19:10:25-07'),
('news','aya kalam ',2,'2019-06-27 19:10:25-07'),
('weather','hurrican in west verginia',3,'NOW()'),
('anime','Naruto is the best anime',4,'NOW()');

INSERT INTO comments (post,user_id,post_id,time_create)VALUES
('text' , 1 , 1 , 'NOW()'),
('oooh nooooooo', 1,2,'2016-06-22 23:10:25-07'),
('OMG' , 2 , 3,'2019-06-22 23:10:25-07'),
('GOD protect you ',3,4,'NOW()'),
('I agree',4,5,'NOW()');

COMMIT;