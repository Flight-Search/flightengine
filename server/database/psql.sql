-- —————————————————————————————————————————————————————————————————————————————
-- Reset

DROP SCHEMA IF EXISTS fly CASCADE;
CREATE SCHEMA fly;
SET search_path TO fly;
CREATE EXTENSION IF NOT EXISTS postgis;

-- —————————————————————————————————————————————————————————————————————————————
-- Airports

CREATE TABLE Airports (
   iata       CHAR(3)      PRIMARY KEY,
   name       VARCHAR(100) NOT NULL,
   country    VARCHAR(100) NOT NULL,
   latitude   REAL         NOT NULL,
   longitude  REAL         NOT NULL
)

CREATE INDEX idx_coordinates ON Airports (latitude, longitude);

-- —————————————————————————————————————————————————————————————————————————————
-- Routes

CREATE TABLE Routes (
   from_iata  VARCHAR(3),
   to_iata    VARCHAR(3),

   PRIMARY KEY (from_iata, to_iata),
   FOREIGN KEY (from_iata) REFERENCES Airports(iata)
)

CREATE INDEX idx_to_iata ON Routes (to_iata);

-- —————————————————————————————————————————————————————————————————————————————
-- Airlines

CREATE TABLE Airlines (
   code  CHAR(2)      PRIMARY KEY,
   name  VARCHAR(100) NULL
)