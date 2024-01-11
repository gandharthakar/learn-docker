# Docker

#### using docker version **<code>24.0.7</code>**

To create dockerfile in your project then run the following command **<code>touch dockerfile</code>**

Or

Always use this command for best and recommanded practice is **<code>docker init</code>** . This command creates necessory files for docker.

Run the following command to build an docker image

<code>docker build -t **<name_of_your_image>** .</code>

Run the following command to run container **<code>docker run --name <your_container_name> -p <port_number_of_which_you_want_to_run_container>:<your_application_port> <your_image_name></code>**

**
**Example :- <code>docker run --name my-container -p 5055:5055 my-docker-image</code>**
**

if you want to make versions of your container and image then run the below command 

**<code>docker run --name <your_container_name> -p <port_number_of_which_you_want_to_run_container>:<your_application_port> <your_image_name>:v<version_number></code>**

**
**Example :- <code>docker run --name my-container -p 5055:5055 my-docker-image:v2</code>**
**

if you want to make versions of your container and image with volumes then run the below command 

**<code>docker run --name <your_container_name> -p <port_number_of_which_you_want_to_run_container>:<your_application_port> --rm -v <absolute_path_of_your_current_dir>:<directory_you_have_specifed> <your_image_name>:v<version_number></code>**

**
**Example :- <code>docker run --name my-container -p 5055:5055 --rm -v D:\xampp\htdocs\learn-docker:/app my-docker-image:v2</code>**
**

**Note :-** The last dot means current directory. you can change current directory like this ../ or ../../ etc.

**<code>-t</code>** - flag is for naming you docker image.

**<code>-p</code>** - flag is for defining / exposing port numbers.

**<code>--name</code>** - flag is for naming you docker container.

**<code>--rm</code>** - flag is for removing containers and images.

**<code>-v</code>** - flag is for creating volums to sync changes.

**<code>.dockerignore</code>** - file use for ignore files and folders from docker project to docker image. 

If you are using  <code>**0**</code> port number means the docker container takes port number randomly.

To see all list of images in command line then run **<code>docker images</code>**

To see all list of containers in command line then run **<code>docker ps</code>**

use **<code>docker --help</code>** for more cli commands.

To delete docker unused image then run the following commnad **<code>docker image rm <your_image_name></code> .**

To delete docker "In use" running... image forcefully then run the following commnad **<code>docker image rm <your_image_name> -f</code> .**

To delete docker unused container then run the following commnad **<code>docker container rm <your_image_name></code> .**

To delete docker "In use" running... container forcefully then run the following commnad **<code>docker container rm <your_image_name> -f</code> .**

Use the **<code>docker container prune -a</code>** command to remove all stopped containers, or refer to the **<code>docker system prune -a</code>** command to remove unused containers in addition to other Docker resources, such as (unused) images and networks.

To Automate Docker Process you need to create **<code>compose.yaml</code>** file and define set of instructions.

after that you need to run the following command **<code>docker compose up</code>**