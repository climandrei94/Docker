# Developing Node.js apps with Docker

- ## Building node images
  - OS Containers
    - full OS image
    - Running init system
    - multiple processes running
    - standard logging and RPC facilities
  - application containers:
    - minimal or no OS image
    - no init system
    - single process running
    - dedicated logging and RPC facilities
  - container images
    - static snapshots of the container filesystem
    - are named tagged and versioned
    - easy to share
    - easy to build and reproduce
  - containers
    - containers are only available at the execution time
    - running a process, usually a single process per container
    - created by `docker run`
  - base images
    - is a prebuilt container image with essential packages installed
    - based on a Linux distribution or created from scratch
    - make it quicker to create derivative images
  - container registry
    - a plate to store tagged images for easy retrieval
    - offers consistent API
    - package archive like NPM
  - images like `node:<verion>-slim` contains only necessary packages included, may be harder to debug using OS tools
  -  images like `node:<version>-alpine` much smaller than most base images, they are a bit tricky since the use musl (???) instead of GNU glibc
  - `Alternatives to dockerfile`
    - Buildah
    - Ansible bender
  - `COPY` command can't copy from outside of the context
  - Build context is where Docker finds the Dockerfile and other files required for the build. The entire context is sent to the Docker daemon
<br><br> 
- ## Configuring and running containers
  - `Containers are supposed to behave the same on every machine`
  - The variable provided by `ARG` will not end up in the final container
  - Arguments set up using the `ARG` instruction impact the build cache when `--build-arg` changes
  - use cases for bind mounts
    - local development environments (sharing source code between the host and container)
    - injecting configuration by sharing a config file between the host and container
    - running one-off commands that work on host files
<br><br>
- ## Debugging containers
  - inspecting containers:
    - `docker inspect`
    - `docker exec`
      - executes another process in a running container
      - helps on:
        - opening a shell in a container
        - reloading the running process
        - running auxiliary programs
          - processing data
          - cleaning cache
          - checking open ports
          - periodic tasks
<br><br>
- ## Running multi-tier applications with Docker compose
  - Bridge networking
    - preferred way to connect Docker services
    - automatic DNS service discovery
    - better isolation
    - containers can be attached and detached during runtime
    - individual bridges
  - Benefits of multi-tier applications
    - applications can only communicate with other applications on a per-need basis
    - better isolation
    - privilege separation
    - microservice are loosely coupled and connected via networks