CREATE KEYSPACE IF NOT EXISTS thingsboardlogic WITH replication = {'class' : 'SimpleStrategy', 'replication_factor' : 1};

CREATE TABLE IF NOT EXISTS thingsboardlogic.watcher (watcherid text, watcher text, active boolean, useremail text, PRIMARY KEY (watcherid));