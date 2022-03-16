CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
    ID int NOT NULL,
    userName varchar(255) NOT NULL,
    searchText varchar(255),
    gitHandle varchar(255),
    roomname varChar(255),
    chatMessage varChar(255),
    PRIMARY KEY (ID)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- insert into persons (ID, LastName, FirstName, Age) values (3, 'Akkaya', 'Cihad', 25);
-- update persons set FirstName = 'Chuckles' where ID = 4;