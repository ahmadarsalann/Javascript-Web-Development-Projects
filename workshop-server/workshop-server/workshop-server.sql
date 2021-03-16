\c postgres
DROP DATABASE IF EXISTS workshop;
CREATE DATABASE workshop;
\c workshop;

CREATE TABLE pain (
	workshop TEXT,
	attendee TEXT
);

INSERT INTO pain (workshop, attendee) VALUES
('React Fundamentals', 'Arsalan');
