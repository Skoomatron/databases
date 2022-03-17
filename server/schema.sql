CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
    ID int NOT NULL,
    userName varchar(20),
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

-- insert into messages (ID, userName, searchText, gitHandle, roomName, chatMessage) values (3, 'trevor', 'some new message', 'burgerman', 'food zone', 'another message');
-- update persons set FirstName = 'Chuckles' where ID = 4;