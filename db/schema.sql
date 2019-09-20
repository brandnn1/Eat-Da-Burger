DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

use burgers_db;

CREATE TABLE burgers (
    burger_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    burger_name VARCHAR (100) NOT NULL,
    devoured boolean default 0
);

