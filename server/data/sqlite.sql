-- —————————————————————————————————————————————————————————————————————————————
-- Reset Database

DROP TABLE IF EXISTS Routes;
DROP TABLE IF EXISTS Airports;
DROP TABLE IF EXISTS Airlines;
DROP INDEX IF EXISTS idx_coordinates;
DROP INDEX IF EXISTS idx_to;

-- —————————————————————————————————————————————————————————————————————————————
-- Airports

CREATE TABLE IF NOT EXISTS [Airports] (
   [iata]       CHAR(3)      NOT NULL,  -- iata
   [name]       VARCHAR(100) NOT NULL,  -- name of airport
   [country]    VARCHAR(100) NOT NULL,  -- country
   [latitude]   REAL         NOT NULL,  -- latitude
   [longitude]  REAL         NOT NULL,  -- longitude

   PRIMARY KEY (iata)
);

CREATE INDEX IF NOT EXISTS idx_coordinates ON [Airports] (latitude, longitude);

-- —————————————————————————————————————————————————————————————————————————————
-- Routes

CREATE TABLE IF NOT EXISTS [Routes] (
   [from_iata]  VARCHAR(3) NOT NULL,  -- origin iata
   [to_iata]    VARCHAR(3) NOT NULL,  -- destination iata

   PRIMARY KEY (from_iata, to_iata),
   FOREIGN KEY (from_iata) REFERENCES Airports(iata)
);

CREATE INDEX IF NOT EXISTS idx_to_iata ON Routes (to_iata);

-- —————————————————————————————————————————————————————————————————————————————
-- Airlines

CREATE TABLE IF NOT EXISTS [Airlines] (
   [code]  CHAR(2)      NOT NULL,  -- airline code
   [name]  VARCHAR(100) NULL,      -- name of airline company

   PRIMARY KEY (code)
);