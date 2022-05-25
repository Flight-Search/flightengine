-- —————————————————————————————————————————————————————————————————————————————
-- Reset Database

DROP TABLE IF EXISTS Airports;
DROP TABLE IF EXISTS Routes;
DROP TABLE IF EXISTS Airlines;

-- —————————————————————————————————————————————————————————————————————————————
-- Airports

CREATE TABLE IF NOT EXISTS [Airports] (
   [iata]       CHAR(3)      PRIMARY KEY,  -- iata
   [name]       VARCHAR(100) NOT NULL,     -- name of airport
   [country]    VARCHAR(100) NOT NULL,     -- country
   [latitude]   REAL         NOT NULL,     -- latitude
   [longitude]  REAL         NOT NULL      -- longitude
);

CREATE INDEX IF NOT EXISTS idx_coordinates ON [Airports] (latitude, longitude);

-- —————————————————————————————————————————————————————————————————————————————
-- Routes

CREATE TABLE IF NOT EXISTS [Routes] (
   [from_iata]  VARCHAR(3) NOT NULL,    -- origin iata
   [to_iata]    VARCHAR(3) NOT NULL,    -- destination iata

   PRIMARY KEY (from_iata, to_iata),
   FOREIGN KEY (from_iata) REFERENCES Airports(iata),
   FOREIGN KEY (to_iata)   REFERENCES Airports(iata)
);

CREATE INDEX IF NOT EXISTS idx_to ON Routes (to_iata);

-- —————————————————————————————————————————————————————————————————————————————
-- Airlines

CREATE TABLE IF NOT EXISTS [Airlines] (
   [code]  CHAR(2)      PRIMARY KEY,  -- airline code
   [name]  VARCHAR(100) NULL          -- name of airline company
);