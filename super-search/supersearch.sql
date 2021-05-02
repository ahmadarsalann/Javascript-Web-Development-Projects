\c postgres
DROP DATABASE IF EXISTS supersearch;
Create database supersearch;
\c supersearch;

create table movies
(movie VARCHAR NOT NULL,
	theater VARCHAR NOT NULL,
	address VARCHAR NOT NULL,
	city VARCHAR NOT NULL,
	zip INTEGER NOT NULL
);

create table stores
(Store_ID INTEGER NOT NULL,
	name Varchar NOT NULL,
	type VARCHAR NOT NULL,
	address VARCHAR NOT NULL,
	city VARCHAR NOT NULL,
	zip INTEGER NOT NULL,
	PRIMARY KEY (Store_ID)
);

CREATE table types
(TYPE_ID INTEGER NOT NULL,
	t_name VARCHAR NOT NULL,
	PRIMARY KEY (TYPE_ID)
);

CREATE table linker
(Store_ID INTEGER NOT NULL,
	TYPE_ID INteger NOT NULL,
	PRIMARY KEY(Store_ID, TYPE_ID),
	FOREIGN KEY(Store_ID) REFERENCES stores(Store_ID),
	FOREIGN KEY(TYPE_ID) REFERENCES types(TYPE_ID)
);

Create table users
(username VARCHAR Primary Key,
	password VARCHAR NOT NULL,
	zipcode INTEGER NOT NULL
);
	


--
-- data for table movies

INSERT INTO movies (movie, theater, address, city, zip) VALUES
('Nobody''s Watching', 'Regal Fredericksburg 15', '3301 Plank Road Route 3W', 'Fredericksburg', 22401),
('It', 'Regal Fredericksburg 15', '3301 Plank Road Route 3W', 'Fredericksburg', 22401),
('The Limehouse Golem', 'Regal Fredericksburg 15', '3301 Plank Road Route 3W', 'Fredericksburg', 22401),
('Despicable Me 3', 'Regal Fredericksburg 15', '3301 Plank Road Route 3W', 'Fredericksburg', 22401),
('Wonder Woman', 'Regal Fredericksburg 15', '3301 Plank Road Route 3W', 'Fredericksburg', 22401),
('The Emoji Movie', 'Regal Fredericksburg 15', '3301 Plank Road Route 3W', 'Fredericksburg', 22401),
('Year By The Sea', 'Marquee Cinemas Southpoint 9', '5800 South Point Centre', 'Fredericksburg',  22401),
('Rememory', 'Allen Cinema 4 Mesilla Valley', '700 South Telshor Boulevard', 'Las Cruces', 88005),
('Wonder Woman', 'Allen Cinema 4 Mesilla Valley', '700 South Telshor Boulevard', 'Las Cruces', 88005),
('Dunkirk', 'Allen Cinema 4 Mesilla Valley', '700 South Telshor Boulevard', 'Las Cruces', 88005),
('Anti Matter', 'Allen Cinema 4 Mesilla Valley', '700 South Telshor Boulevard', 'Las Cruces', 88005);

-- --------------------------------------------------------


--
-- Data for table stores
--

INSERT INTO stores (Store_ID, name, type, address, city, zip) VALUES
(1, 'Hyperion Espresso', 'coffee', '301 William St.',  'Fredericksburg', 22401),
(2,'Starbucks', 'coffee', '2001 Plank Road', 'Fredericksburg', 22401),
(3,'25 30 Expresso', 'coffee', '400 Princess Anne St', 'Fredericksburg', 22401),
(4,'Agora Downtown', 'coffee', '520 Caroline St', 'Fredericksburg', 22401),
(5,'Highpoint Coffee', 'coffee', '615 Caroline St', 'Fredericksburg', 22401),
(6,'Duck Donuts', 'coffee', '1223 Jefferson Davis Hwy', 'Fredericksburg', 22401),
(7,'Basilico', 'Italian', '2577 Cowan Blvd', 'Fredericksburg',  22401),
(8,'Cork and Table', 'American', '909 Caroline', 'Fredericksburg',  22401),
(9,'Orofino', 'Italian', '1251 Carl D Silver Parkway', 'Fredericksburg',  22401),
(10,'Pancho Villa Mexican Rest', 'Mexican restaurant', '10500 Spotsylvania Ave', 'Fredericksburg', 22401),
(11,'Chipotle', 'Mexican restaurant', '5955 Kingstowne', 'Fredericksburg', 22401),
(12,'Sedona Taphouse', 'American', '591 Williams', 'Fredericksburg', 22401),
(13,'Pueblo''s Tex Mex Grill' , 'Mexican restaurant', '1320 Jefferson Davis Hwy', 'Fredericksburg', 22401),
(14,'El Pino', 'Mexican restaurant', '4211 Plank Road', 'Fredericksburg', 22401),
(15, 'Starbucks', 'coffee', '2808 Telshor Blvd', 'Las Cruces', 88005),
(16, 'Starbucks', 'coffee', '2511 Lohman Ave', 'Las Cruces', 88005),
(17, 'Milagro Coffee Y Espresso', 'coffee', '1733 E. University Ave', 'Las Cruces', 88005),
(18, 'Starbucks', 'coffee', '1500 South Valley',  'Las Cruces', 88005),
(19, 'Bean', 'coffee', '2011 Avenida De Mesilla',  'Las Cruces', 88005),
(20, 'El Comedor', 'Mexican restaurant', '2190 Avenida De  Mesilla', 'Las Cruces', 88005),
(21,'Los Compas', 'Mexican restaurant', '603 S Nevarez St.',  'Las Cruces', 88005),
(22, 'La Fuente', 'Mexican restaurant', '1710 S Espina',  'Las Cruces', 88005),
(23, 'La Posta', 'Mexican restaurant', '2410 Calle De San Albino',  'Las Cruces', 88005),
(24, 'El Jacalito', 'Mexican restaurant', '2215 Missouri Ave',  'Las Cruces', 88005),
(25, 'Peet''s', 'coffee', '2260 Locust',  'Las Cruces', 88005),
(26, 'Outback', 'American', '2941 Plank Rd', 'Fredericksburg', 22401),
(27, 'Target', 'Grocery', '6100 Paseo Del Norte', 'Albuquerque', 87113),
(28, 'Walmart', 'Grocery', '2550 Coors Blvd', 'Albuquerque', 87120),
(29, 'Chick-fil-A', 'American', '4001 Coors Blvd', 'Albuquerque', 87120),
(30, 'Fai Wong', 'Chinese restaurant', '6200 Coors Blvd', 'Albuquerque', 87120);

-- --------------------------------------------------------

Insert into types (TYPE_ID, t_name) VALUES
(1, 'Donuts'),
(2, 'fastfood'),
(3, 'French'),
(4, 'cookingclass'),
(5, 'boujie'),
(6, 'cafe'),
(7, 'steakhouse'),
(8, 'fine dining'),
(9, 'smoothie'),
(10, 'backery'),
(11, 'Super Center'),
(12, 'coffee'),
(13, 'Italian'),
(14, 'Mexican restaurant'),
(15, 'American'),
(16, 'Grocery'),
(17, 'Chinese restaurant');

------------------------------------------------------------
--Going to begin linking

Insert into linker (Store_ID, TYPE_ID) VALUES
(1, 6),
(1, 12),
(2, 6),
(2, 12),
(3, 6),
(3, 12),
(4, 6),
(4, 12),
(5, 6),
(5, 12),
(6, 6),
(6, 12),
(6, 1),
(6, 10),
(6, 9),
(7, 5),
(7, 13),
(8, 3),
(8, 14),
(9, 4),
(9, 13),
(10, 8),
(10, 14),
(10, 5),
(11, 2),
(11, 14),
(12, 5),
(12, 15),
(12, 8),
(13, 8),
(13, 14),
(14, 8),
(14, 14),
(15, 6),
(15, 12),
(16, 6),
(16, 12),
(17, 6),
(17, 12),
(18, 6),
(18, 12),
(19, 6),
(19, 12),
(20, 8),
(20, 14),
(21, 8),
(21, 14),
(22, 8),
(22, 14),
(23, 8),
(23, 14),
(24, 8),
(24, 14),
(24, 5),
(25, 6),
(25, 12),
(26, 7),
(26, 15),
(26, 5),
(26, 8),
(27, 11),
(27, 16),
(28, 11),
(28, 16),
(29, 2),
(29, 15),
(30, 8),
(30, 17);


