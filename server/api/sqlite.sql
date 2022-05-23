-- —————————————————————————————————————————————————————————————————————————————
-- Edges

CREATE TABLE IF NOT EXISTS [Routes] (
   [id]         INTEGER PRIMARY KEY,  -- route id
   [from_iata]  VARCHAR(3),           -- iata origin
   [from_name]  VARCHAR(3),           -- name origin
   [to_iata]    VARCHAR(100),         -- iata destination
   [to_name]    VARCHAR(100),         -- name destination
);

CREATE INDEX IF NOT EXISTS idx_from_to ON [Routes] (from, to);
CREATE INDEX IF NOT EXISTS idx_to      ON [Routes] (to);

-- —————————————————————————————————————————————————————————————————————————————
-- Vertices

CREATE TABLE IF NOT EXISTS [Airports] (
   [iata]  CHAR(3) PRIMARY KEY,  -- iata
   [name]  VARCHAR(100),         -- name
   [lat]   REAL,                 -- latitude
   [lon]   REAL,                 -- longitude
   [tz]    INTEGER,              -- timezone
);

-- —————————————————————————————————————————————————————————————————————————————
-- Airlines

CREATE TABLE IF NOT EXISTS [Airlines] (
   [iata] CHAR(2) PRIMARY KEY,  -- iata
   [name] VARCHAR(100),         -- Airline Company Name
);