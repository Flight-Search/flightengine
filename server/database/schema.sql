\set ON_ERROR_STOP ON

DROP DATABASE IF EXISTS flightsearch;

CREATE DATABASE flightsearch;
\connect flightsearch;

CREATE EXTENSION IF NOT EXISTS postgis;

CREATE TABLE airports (
  id INT PRIMARY KEY,
  iata CHAR(3),
  name VARCHAR(128),
  location VARCHAR(128),
  latitude FLOAT,
  longitude FLOAT
);

\copy airports FROM '../data/airports.tsv' DELIMITER E'\t' CSV HEADER;

\unset ON_ERROR_STOP