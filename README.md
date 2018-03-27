# Event API

[![pipeline status](https://gitlab.com/nmonst4/event_api/badges/master/pipeline.svg)](https://gitlab.com/nmonst4/event_api/commits/master)

The api create events and handle/store the registration to this events.


## Development

### Install
`npm install`

### Add Database and create schema

Create a database on localhost:3306 or change the ormconfig.js or set environment variables

`export DATABASE_HOST=localhost`
`export DATABASE_USERNAME=root`
`export DATABASE_PASSWORD=root`
`export DATABASE_NAME=eventapi`

now we can create our schema and tables.

`npm run schema:sync`


### Run Debug Server

`npm run debug`

### Test

`npm test`

**Attention:** Windows user need to edit the test command in the package.json. They need to remove the PORT part.


## Docker

### Build Image

`docker build --rm -f Dockerfile -t event_api:latest .`

### Run Build

`docker run --rm -it -p 3000:3000 event_api:latest`