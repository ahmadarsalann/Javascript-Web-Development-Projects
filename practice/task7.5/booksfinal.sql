\c postgres
DROP DATABASE IF EXISTS books;
create Database books;
\c books

create table books
(BOOK_ID INTEGER NOT NULL,
	isbn VARCHAR NOT NULL,
	title VARCHAR NOT NULL,
	format VARCHAR NOT NULL,
	price INTEGER NOT NULL,
	pages INTEGER NOT NULL,
	publication_date date NOT NULL,
	PRIMARY KEY(BOOK_ID)
);

create table author
(AUTHOR_ID INTEGER NOT NULL,
	author VARCHAR NOT NULL,
	author_residence VARCHAR NOT NULL,
	author_Birthday date NOT NULL,
	PRIMARY KEY(AUTHOR_ID)
);

create table publisher
(PUBLISHER_ID INTEGER NOT NULL,
	PUBLISHER VARCHAR NOT NULL,
	Publisher_HQ VARCHAR NOT NULL,
	PRIMARY KEY(PUBLISHER_ID)
);

create table whowrote
(AUTHOR_ID INTEGER NOT NULL,
	BOOK_ID INTEGER NOT NULL,
	PUBLISHER_ID INTEGER NOT NULL,
	PRIMARY KEY(AUTHOR_ID, BOOK_ID, PUBLISHER_ID),
	FOREIGN KEY(BOOK_ID) REFERENCES books(BOOK_ID),
	FOREIGN KEY(AUTHOR_ID) REFERENCES author(AUTHOR_ID),
	FOREIGN KEY(PUBLISHER_ID) REFERENCES publisher(PUBLISHER_ID)
);

INSERT into books values (1, '030788743X', 'Ready Player One', 'hardcover', 18.69, 384, '2011-08-16');
Insert into books values (2, '1524761338', 'Ready Player Two', 'hardcover', 13.18, 384, '2020-11-24');
Insert into books values (3, '0062409166', 'The Rise and Fall of D.O.D.O.: A Novel', 'hardcover', 4.28, 768, '2017-06-13');
Insert into books values (4, '0062409158', 'The Rise and Fall of D.O.D.O.: A Novel', 'paperback', 1.99, 768, '2017-06-13');
Insert into books values (5, '0553380958', 'Snow Crash', 'paperback', 9.99, 440, '2000-1-1');


Insert into author values (1, 'Ernest Cline', 'Austin TX', '1972-03-29');
Insert into author values (2, 'Neal Stephenson', 'Seattle WA', '1959-10-31');
Insert into author values (3, 'Nicole Galland', 'Martha''s Vineyard, MA', '1965-10-31');

Insert into publisher values (1, 'Ballantine', 'New York, NY');
Insert into publisher values (2, 'William Morrow', 'New York, NY');	
Insert into publisher values (3, 'Del Ray', 'New York, NY');

Insert into whowrote values (1, 1, 1);
Insert into whowrote values (1, 2, 1);
Insert into whowrote values (2, 3, 2);
Insert into whowrote values (2, 4, 2);
Insert into whowrote values (3, 3, 2);
Insert into whowrote values (3, 4, 2);
Insert into whowrote values (2, 5, 3);
