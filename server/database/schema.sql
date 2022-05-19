\set ON_ERROR_STOP ON

DROP DATABASE IF EXISTS flightsearch;
DROP EXTENSION IF EXISTS postgis;

CREATE DATABASE flightsearch;
\connect flightsearch;

CREATE EXTENSION IF NOT EXISTS postgis;

\unset ON_ERROR_STOP