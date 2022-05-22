CREATE TABLE IF NOT EXISTS [Routes] (
   [id]    INTEGER PRIMARY KEY, -- route id
   [from]  VARCHAR(100),        -- iata origin
   [to]    VARCHAR(100),        -- iata destination
);

CREATE INDEX IF NOT EXISTS idx_from_to ON [Routes] (from, to);
CREATE INDEX IF NOT EXISTS idx_to      ON [Routes] (to);
