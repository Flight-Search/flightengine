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
  name VARCHAR(x),
  location VARCHAR(x),
  street_number VARCHAR(x),
  street VARCHAR(x),
  city VARCHAR(x),
  county VARCHAR(x),
  state VARCHAR(x),
  country_iso VARCHAR(x),
  country VARCHAR(x),
  postal_code VARCHAR(x),
  phone VARCHAR(x),
  latitude INT,
  longitude INT,
  uct CHAR(x),
  website VARCHAR(x)
)

\unset ON_ERROR_STOP