\c postgres
DROP DATABASE IF EXISTS sheet;
create Database sheet;
\c sheet


create table courses
(COURSE_ID INTEGER NOT NULL,
	course VARCHAR NOT NULL,
	section INTEGER NOT NULL,
	day VARCHAR NOT NULL,
	morning_or_afternoon VARCHAR NOT NULL,
	building VARCHAR NOT NULL,
	room VARCHAR NOT NULL,
	PRIMARY KEY (COURSE_ID)
); 


create table names
(NAMES_ID INTEGER NOT NULL,
	title VARCHAR NOT NULL,
	description VARCHAR NOT NULL,
	PRIMARY KEY (NAMES_ID)
);

create table instructor
(INSTRUCTOR_ID INTEGER NOT NULL,
	Instructor VARCHAR NOT NULL,
	Instructor_Email VARCHAR NOT NULL,
	PRIMARY KEY (INSTRUCTOR_ID)
);

create table lconnect
(COURSE_ID INTEGER NOT NULL,
	NAMES_ID INTEGER NOT NULL,
	INSTRUCTOR_ID INTEGER NOT NULL,
	PRIMARY KEY(COURSE_ID, NAMES_ID, INSTRUCTOR_ID),
	FOREIGN KEY(COURSE_ID) REFERENCES courses(COURSE_ID),
	FOREIGN KEY(NAMES_ID) REFERENCES names(NAMES_ID),
	FOREIGN KEY(INSTRUCTOR_ID) REFERENCES instructor(INSTRUCTOR_ID)
);


INSERT into courses values (1, 'CS120', 1, 'MW', 'morning', 'downtown', 'c12');
INSERT into courses values (2, 'CS120', 2, 'MW', 'afternoon', 'downtown', 'c8' );
INSERT into courses values (3, 'CS220', 1, 'MW', 'morning' , 'downtown', 'c12');
INSERT into courses values (4, 'CS340', 1, 'TT', 'afternoon', 'Nob Hill', 'nh1');
INSERT into courses values (5, 'CS340', 2, 'MW', 'afternoon', 'downtown', 'c10');


INSERT into names values(1, 'Javascript Fundamentals', 'This course is designed to provide a solid introduction to the JavaScript language. We will explore the more unique and tricky JavaScript features such as closures, higher-order functions,');
INSERT into names values(2, 'PostgreSQL', 'This course will teach you how to explore, modify, and export data from a database. You’ll be introduced to foundational concepts like tables, data types, and queries.' );
INSERT into names values(3, 'Devops', 'We examine the definition and concepts around the ideas of DevOps. How do they relate to working in the cloud? ');

INSERT into instructor values(1, 'Becca Elenzil', 'elenzil@ada.org' );
INSERT into instructor values(2, 'Claire Elliot', 'elliot@ada.org' );
INSERT into instructor values(3, 'Kaida Masaki', 'kmas@ada.org' );

Insert into lconnect values(1, 1, 1);
Insert into lconnect values(2, 1, 2);
Insert into lconnect values(3, 2, 1);
Insert into lconnect values(4, 3, 3);
Insert into lconnect values(5, 3, 3);

