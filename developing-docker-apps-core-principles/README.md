## Developing docker apps: core principles

## Course notes
- ### Using volumes to develop applications in containers
  - Volume types:
    - tmpfs mount (temporary storage), used to store sensitive data, data is stored in memory
    - named or anonymous volume, managed by docker
      - advantages:
        - volume is a managed object
        - isolated form other host activity
        - easy to identify and backup
        - better performance when using docker desktop
      - disadvantages:
        - owned by the root user
    - bind mount; arbitrary directory mounted from host
      - host location mounted into the container when the container is invoked
      - directory paths must be absolute paths rather than relative paths
      - changes made to source located on the host are reflected in the container via the bind mount volume
<br><br>
- ### Separating application build and execution with multi-stage build
  - Problems with compiled languages
    - increased complexity
    - large image size
  - How do we accommodate compiled languages whilst maintaining the benefits of developing with Docker?
    - Builder pattern -> split out the build step sequence from the run step sequence, with separate Dockerfile for each task
  - multi-stage dockerfile 
    - select which stage to build using the `--target` option with the stage name
    - benefits:
      - smaller image size attained by selective inclusion of content
      - smaller surface area open to intentional or accidental compromise
      - logical separation of build steps according to purpose
      - easier and more reliable maintenance of Dockerfile instructions
    - buildKit is the next generation container image build engine provided by Docker
      - processes Dockerfile instructions and constructs a directed acyclic graph of dependencies
      - provides an optional extended Dockerfile instruction set for more advanced build features
      - BuildKit is not the default build engine that is used when invoking a container image build
      - to enable, create a file deamon.json with json:
        ```
        {
          "features": {
            "buildkit": true
          }
        }
        ```
<br><br>
- ### Best practices for optimizing Docker images
  - dockerfile instruction types
    - instructions - dockerfile instructions define the content and nature of images
      - COPY - used to copy content form the build context into the image
      - ADD - Like COPY instruction but ca retrieve remote content; recommended to use COPY instruction where possible;
      - RUN - Executes commands to generate additional image content
    - metadata - instructions that define how derived containers will get executed
    - content - instructions that create files and directories for the image
  - docker uses a local cache of image build steps. Careful placement of dockerfile instructions can maximize cache hits
  - each dockerfile instruction processed during a build results in the creation of an intermediary image that is part of the build cache
  - these images are created by 'committing' containers created from the image associated with the preceding dockerfile instruction
  - images reference their parent image and thereby create an implicit chain of images that represent a sequence of instructions
  - docker will pass over instructions that form a sequence that already exists in the build cache
  - adding, removing or altering an instruction invalidates the cache
  - analyze the dependencies between dockerfile instructions to determine ordering constraints 
  - `order dockerfile instructions according to the frequency of change; less frequent first more frequent last`
  - where it's beneficial, split copy dockerfile instructions that copy content from the build context
<br><br>
- ## Making configuration data available to containerized applications
  - ARG instruction
    - for values only known at build time
    - useful for variables required for builds
    - scoped from line in which it is defined
    - not visible when inspecting image
  - ENV instruction
    - generally used for defining variables
    - useful for persisting variables in image
    - ENV variables trump ARG variables
    - visible in image's configuration
<br><br>
- ## Configuration logging for containerized applications
  - a twelve-factor app never concerns itself with routing or storage of its output stream. It should not attempt to write to or manage logfiles. Instead, each running process writes its event stream, unbuffered, to STDOUT
  - for containers, docker captures, and stores output written to the STDOUT and STFERR streams
  - linking log files to streams:
    ```
      Dockerfile
      RUN ln -sf /dev/stdout /<file_name>.log && \
          ln -sf /dev/stderr /<error>.log
    ```
  - docker's logging mechanism
    - pluggable system - implemented using pluggable drivers
    - batteries included - inbuilt options for managing logs locally
    - third-party vendors - popular logging solutions are available
  - customize log output
    - `--details` display additional info from tag
    - `--follow` follow the log output
    - `--tail` show last n lines of output
    - `--since` show log output since a point in time
    - `--util` show log output up to a point in time
    - `--timestamps` annotate logs with a timestamp
