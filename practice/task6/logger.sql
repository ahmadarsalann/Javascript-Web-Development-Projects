\c postgres
DROP Database if exists logger;
Create database logger;
\c logger

Create Table users(
	username Text Primary Key,
	password Text not null,
	screenname Text not null
);     
