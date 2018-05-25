# SQLite3 Configurations

No need to configure. Very basic.

If you need to drop the database, just delete the file stored in the project folder. 



# PostgreSQL Linux Configurations

> REF: https://docs.djangoproject.com/en/1.11/ref/contrib/postgres/
>
> REF: https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-16-04
>
> REF: https://www.postgresql.org/docs/9.5/static/index.html
>
> REF: https://www.postgresql.org/docs/9.5/static/tutorial-start.html

__Requirements:__

- postgresql=9.5.10
- psycopg2=2-2.7.3.2

PostgreSQL has a number of features which are not shared by the other databases Django supports. 



### Install the Components from the Ubuntu Repositories

```bash
$ sudo apt-get update
$ sudo apt-get install python-pip python-dev libpq-dev postgresql postgresql-contrib
```



### Create a Database and Database User

_NOTES:_

- By default, Postgres uses an authentication scheme called "peer authentication" for local connections. 
- Basically, this means that if the user's operating system username matches a valid Postgres username, that user can login with no further authentication.

During the Postgres installation, an operating system user named `postgres` was created to correspond to the `postgres` PostgreSQL administrative user. We need to change to this user to perform administrative tasks:

```bash
$ sudo su - postgres
```



Currently, we just have the `postgres` role configured within the database. We can create new roles from the command line with the `createrole` command. The `--interactive` flag will prompt you for the necessary values.

```bash
postgres=# createuser --interactive
```

OR

```bash
$ sudo -u postgres createuser --interactive
```





We will create a database for our Django project.

```bash
postgres=# CREATE DATABASE codeninja55_web;
```



Next, we will create a database user which we will use to connect to and interact with the database.

```bash
postgres=# CREATE USER codeninja55 WITH PASSWORD '{password}';
```



Afterwards, we'll modify a few of the connection parameters for the user we just created. 

_NOTES:_

- This will speed up database operations so that the correct values do not have to be queried and set each time a connection is established.
- Set the default encoding to UTF-8, which Django expects. 
- Set the default transaction isolation scheme to "read committed", which blocks reads from uncommitted transactions.
- Set the timezone. By default, our Django projects will be set to use `UTC`:

```bash
postgres=# ALTER ROLE codeninja55 SET client_encoding TO 'utf8';
postgres=# ALTER ROLE codeninja55 SET default_transaction_isolation TO 'read committed';
postgres=# ALTER ROLE codeninja55 SET timezone TO 'UTC';
```



Now, all we need to do is give our database user access rights to the database we created. Exit the SQL prompt to get back to the `postgres` user's shell session.  Exit out of the `postgres` user's shell session to get back to your regular user's shell session:

```bash
postgres=# GRANT ALL PRIVILEGES ON DATABASE codeninja55_web TO codeninja55;
postgres=# \q
postgres@LOCAL-PC ~ $ exit
```



### Configure the Django Database Settings

##### settings.py

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': '{database_name}',
        'USER': '{database_user}',
        'PASSWORD': '{password}',
        'HOST': 'localhost',
        'PORT': '',
    }
}
```



### Migrate the Database and create superuser

```bash
(CN55BlogEnv) $ python manage.py makemigrations
(CN55BlogEnv) $ python manage.py migrate
(CN55BlogEnv) $ python manage.py createsuperuser --name codeninja --email andrew@codeninja55.me
```



### (Optional) Frequent Commands

#### Accessing a Postgres Prompt Without Switching Accounts

```bash
$ sudo -u postgres psql
```

OR

```bash
$ psql -U postgres
```

#### List all roles

```bash
database_name=# \du[+]
```

#### See tables

```bash
database_name=# \d
```

#### Drop Databases

```sql
DROP DATABASE {database_name};
```

#### Drop Users

```sql
DROP USER {user_name};
```

#### Change passwords

```sql
ALTER USER codeninja55 WITH PASSWORD '{new_password}';
```

#### Give users extra abilities

```sql
ALTER USER codeninja55 CREATEUSER CREATEDB;
```

#### Project: remove all tables in the PostgreSQL Database

```sql
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;
GRANT ALL ON SCHEMA public TO codeninja, codeninja55;
GRANT ALL ON SCHEMA public TO PUBLIC;
```

## `pg_dump`

### Database

```bash
$ pg_dump --format=p --file=ndevents.db.sql ndevents
```

NOTES:

* `-F`, `--format=c|t|p`       output file format (custom, tar, plain text)
* `-f`, `--file=FILENAME`      output file name

### Specific Tables

```bash
$ pg_dump -h localhost -U wano -W --column-inserts -t "public.\"auth_user\"" ndevents > auth_user.sql
```

```bash
$ pg_dump -h localhost -U wano -W --column-inserts -t "public.\"NDEvents_api_event\"" ndevents > NDEvents_api_event.sql
```

```bash
$ pg_dump -h localhost -U wano -W --column-inserts -t "public.\"NDEvents_api_event\"" ndevents > NDEvents_api_event.sql
```

NOTES:

* `-W` for password prompt
* `public` is the schema
* `--column-inserts` creates an insert for each row



### (Optional) Postgres Security

> REF: https://www.digitalocean.com/community/tutorials/how-to-secure-postgresql-against-automated-attacks
>
> REF: http://postgresguide.com/utilities/psql.html

