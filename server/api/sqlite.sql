-- —————————————————————————————————————————————————————————————————————————————
-- Edges

CREATE TABLE IF NOT EXISTS [Routes] (
   [id]         INTEGER      PRIMARY KEY, -- route id
   [from_iata]  VARCHAR(3)   NOT NULL,    -- origin iata
   [from_name]  VARCHAR(3)   NULL,        -- origin name
   [to_iata]    VARCHAR(100) NOT NULL,    -- destination iata
   [to_name]    VARCHAR(100) NULL,        -- destination name
);

CREATE INDEX IF NOT EXISTS idx_from_to ON [Routes] (from_iata, to_iata);
CREATE INDEX IF NOT EXISTS idx_to      ON [Routes] (to_iata);

-- —————————————————————————————————————————————————————————————————————————————
-- Vertices

CREATE TABLE IF NOT EXISTS [Airports] (
   [iata]     CHAR(3)      PRIMARY KEY,  -- iata
   [name]     VARCHAR(100) NOT NULL,     -- name of airport
   [lat]      REAL         NOT NULL,     -- latitude
   [lon]      REAL         NOT NULL,     -- longitude
   [country]  VARCHAR(100) NOT NULL,     -- country
);

-- —————————————————————————————————————————————————————————————————————————————
-- Airlines

CREATE TABLE IF NOT EXISTS [Airlines] (
   [iata]  CHAR(2)      PRIMARY KEY,  -- iata
   [name]  VARCHAR(100) NULL          -- name of airline company
);