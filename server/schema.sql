CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
    ID int NOT NULL,
    userName varchar(255) NOT NULL,
    messageText varchar(255),
    gitHandle varchar(255),
    roomName varChar(255),
    PRIMARY KEY (ID)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- insert into persons (ID, LastName, FirstName, Age) values (3, 'Akkaya', 'Cihad', 25);
-- update persons set FirstName = 'Chuckles' where ID = 4;