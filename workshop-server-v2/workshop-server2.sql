\c postgres
DROP DATABASE IF EXISTS workshop_v2;
CREATE DATABASE workshop_v2;
\c workshop_v2;

create table users (
	USER_ID SERIAL PRIMARY KEY,
	username TEXT,
	firstname TEXT,
	lastname TEXT,
	email TEXT
);

create table workshops (
	WORKSHOP_ID SERIAL PRIMARY KEY,
	title TEXT,
	date date,
	location TEXT,
	maxseats INTEGER,
	instructor TEXT
);

create table enrollment (
	user_id Integer,
	workshop_id Integer,
	PRIMARY KEY(user_id, workshop_id),
	FOREIGN KEY(user_id) REFERENCES users(USER_ID),
	FOREIGN KEY(workshop_id) REFERENCES workshops(WORKSHOP_ID)
);


Insert into users (username, firstname, lastname, email) VALUES
('ahmadarsalann', 'Arsalan', 'Ahmad', 'ahmadarsalann@gmail.com');

INSERT into workshops (title, date, location, maxseats, instructor) VALUES
('testing', '2018-11-01', 'someplace', 1, 'lame');

Insert into enrollment (user_id, workshop_id) VALUES
(1,1);
