\set ON_ERROR_STOP ON

DROP DATABASE IF EXISTS flightsearch;
DROP EXTENSION IF EXISTS postgis;

CREATE DATABASE flightsearch;
\connect flightsearch;

CREATE EXTENSION IF NOT EXISTS postgis;

CREATE TABLE airports (
  id INT PRIMARY KEY,
  iata CHAR(3),
  icao CHAR(4),
  name VARCHAR(64),
  location VARCHAR(64),
  street_number VARCHAR(8),
  street VARCHAR(32),
  city VARCHAR(32),
  county VARCHAR(32),
  state VARCHAR(16),
  country_iso VARCHAR(3),
  country VARCHAR(16),
  postal_code VARCHAR(8),
  phone VARCHAR(32),

  -- latitude FLOAT,
  -- longitude FLOAT,

  uct INT,
  website VARCHAR(64)
);

-- PostGIS longitude latitude
ALTER TABLE airports ADD COLUMN geog GEOGRAPHY;

\unset ON_ERROR_STOP