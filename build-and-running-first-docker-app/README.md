# Building and running your first docker app

## Course notes
- ## Setting up your development environment
  - benefits of docker
    - accelerate developer onboarding
    - eliminate app conflictsdoc
    - environment consistency
    - ship software faster
  - docker image
    - recipe for what we want to create
    - Define the contents that are needed to run a container
    - A read-only template composed of layered filesystem used to share common files and create Docker container instances
  - container 
    - An isolated and secured shipping container created from an image that can be run, started, stopped, moved and deleted
  - `docker exec -it <container id> sh` -> open the console from the container
  - `docker ps -a` list all the containers
<br><br>
- ## Create an application image
  - dockerfile
    - is a text document that contains all the commands a user could call on the command line to assemble an image.
  - `docker build -t <tag name> -f <dockerfile name> .` -> if I want to name dockerfile with other name
  - images an imutable, you create another one with a different tag
  - `docker push <user name>/<image name>:<tag>`
<br><br>
- ## Run an  application container
  - `docker logs <container id>`
  - `docker run -p <ports> -v ${PWD}<path to file that should be persisted> <image id>`
<br><br>
- ## Communicate between multiple containers
   - `docker run -d --net=isolated_network --name=mongodb(db container name) mongodb`
   - shell into a container -> `docker exec -it <container id> sh`
  - a bridge network allows containers in the same network to communicate
  - Docker compose is an orchestration engine that can build and run containers