-- Creates the "burgers_db" database --
CREATE DATABASE burgers_db;
-- Makes it so all of the following code will affect burgers_db --
USE burgers_db;

-- Creates the table "burgers" within burgers_db --
CREATE TABLE burgers (
  -- Auto-incrementing ID
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- Makes a string column called "name" which cannot contain null --
  burger_name VARCHAR(30) NOT NULL,
  -- Makes a boolean column called "tf" which cannot contain null --
  devoured BOOLEAN NOT NULL,
  -- Makes a sting column called "string_name" --
  date TIMESTAMP NOT NULL,
  -- Sets id as this table's primary key which means all data contained within it will be unique --
  PRIMARY KEY (id)
);