## Building and orchestrating containers with docker compose

## Course notes
- ## Getting started with docker compose
  - docker image -> define the contents that are needed to run a container
  - docker container -> runs your application
  - docker compose features:
    - manages the while application lifecycle
      - start, stop and rebuild services
      - view the status of running services
      - stream the log output of running services
      - run a one-off command on a service
  - docker compose workflow
    - build services
    - start up services
    - tear down services
  - key service configuration options
    - build
    - environment
    - image
    - networks
    - ports
    - volumes
<br><br>
- ## Building images with docker compose
  - key docker compose build properties:
    - context
    - dockerfile
    - build arguments
    - image
<br><br>
- ## Orchestrating containers with docker compose
  - depends_on -> doesn't mean that will wait for it to fully start the service that depends on, it will only start it and move on.
  - `-- no-deps <service name>` -> do not recreate services that the service depends on, it will stop, destroy and recreate only a specific service
<br><br>
- ## Additional docker compose features
  - `--tail=x` View the last `x` lines of the service logs
  - `docker exec -it <container id> sh`
  - `-it` interactive TTY
  - `docker-compose exec <container id> sh`
  - `--scale api=4` -> scale the number of containers created for a service
  - `deploy` property of docker-compose file where you can define:
    - replicas
    - restart_policy
  - 
