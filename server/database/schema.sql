\set ON_ERROR_STOP ON

DROP DATABASE IF EXISTS flightsearch;
DROP EXTENSION IF EXISTS postgis;

CREATE DATABASE flightsearch;
\connect flightsearch;

CREATE EXTENSION IF NOT EXISTS postgis;

CREATE TABLE airports (
  id INT PRIMARY KEY,
  iata CHAR(x),
  icao CHAR(x),
  name CHAR(x),
  location VARCHAR(x),
  street_number CHAR(1),
  street CHAR(x),
  city CHAR(x),
  county CHAR(x),
  state CHAR(x),
  country_iso CHAR(x),
  country CHAR(x),
  postal_code VARCHAR(x),
  phone VARCHAR(x),
  latitude INT,
  longitude INT,
  uct CHAR(x),
  website VARCHAR(x)
)

\unset ON_ERROR_STOP