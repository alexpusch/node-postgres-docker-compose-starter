based on https://github.com/b00giZm/docker-compose-nodejs-examples

This starter includes a docker-compose system with:
  - A simple Express.js generated app
  - Simple Postgres server

Instructions:
- Make sure you have docker, docker-compose installed. For mac, just install Docker for mac.
- In the projects directory run:
```
  docker-compose build
  docker-compose up
```
- Express server should be up on http://localhost:3000
- A Postgres server should be up. Username, password and db name are all 'postgres'. You can check db integrity in http://localhost:3000/test_db
