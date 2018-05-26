DROP DATABASE IF EXISTS ndevents;
DROP USER IF EXISTS wano;

CREATE DATABASE ndevents;
CREATE USER wano WITH PASSWORD 'wearenumber1';
ALTER ROLE wano SET client_encoding TO 'utf8';
ALTER ROLE wano SET default_transaction_isolation TO 'read committed';
ALTER ROLE wano SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE ndevents TO wano;