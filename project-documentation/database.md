# MySQL Configurations

* Install MySQL 5.7
  * Enter root password during installation 
* `$ mysql -u root -p`
* `mysql> create database databaseNO;`
* `mysql> create user 'wano'@'localhost' identified by 'password';`
* `mysql> grant all privileges on databaseNO.* to 'wano'@'localhost';`
* To connect while in a conda environment:
  * `(wanoEnv) $ mysql -h 127.0.0.1 -u wano -p`
* Done

