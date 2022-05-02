# Getting started with Docker

## Course notes
- [Play with Docker online](https://labs.play-with-docker.com)
- build image -> `docker build -t <docker-hub-id>/repo-name:version>`
- `docker image push` -> upload image to docker hub
- `docker container run --name <container name> -p <local-port>:<docker-port>`
  - `-d` -> detached terminal
  - `-it`-> interactive terminal
- `docker stop/start <container name>` -> stop/start container
- CTRL + P + Q -> leave container terminal without terminating it
- docker swarm
