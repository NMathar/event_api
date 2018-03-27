# Event API

[![pipeline status](https://gitlab.com/nmonst4/event_api/badges/master/pipeline.svg)](https://gitlab.com/nmonst4/event_api/commits/master)

The api create events and handle/store the registration to this events.


## Docker

### Build Image

`docker build --rm -f Dockerfile -t event_api:latest .`

### Run Build

`docker run --rm -it -p 3000:3000 event_api:latest`