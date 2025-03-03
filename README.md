# Microservices for a supermarket

<p>
The microservices project for a supermarket platform that tries to simulate a microservices architecture has three microservices: product listing services, customer services and email sending services. Each of these microservices has independent functions such as:

- **List Products:** Gets a list of products that the supermarket contains in Json format.

- **List customers:** obtains the customers who are registered in the supermarket.

- **Email sending:** send welcome emails to customers starting from Gmail service.

It should be noted that this is just a microservices project. Dockerfile and Docker-compose are also used to create Docker images. Git Actions automates the creation of images, uploading them to Docker Hub and then deploying them to EC2.
</p>

### How to install and run the project? :wrench:
Node.js technologies are used with the Express.js framework, as well as Dockerfile and Docker-compose.
The project must first be downloaded or cloned:
- `git clone https://github.com/JaviQuilumba/MicroservicesSupermarket.git`

The following steps are to install dependencies and run the project:
- `npm install`

Steps to build Docker-compose:
- `docker-compose build`
- `docker-compose up`

Command to shut down the container:
- `docker-compose down`

### How to use the project :white_check_mark:
<p>
To use the project you must execute the commands described in the previous point. When you run it in the terminal, you will be able to find URLs that you can open locally and you will be able to see the different services it offers, such as listing the products, listing the customers, and generating an email.
</p>

![Captura de pantalla 2024-07-06 121214](https://github.com/JaviQuilumba/MicroservicesSupermarket/assets/167824357/978c04c7-ad6b-4b0f-8748-ebd0754779a2)
![Captura de pantalla 2024-07-06 121555](https://github.com/JaviQuilumba/MicroservicesSupermarket/assets/167824357/34c668e4-88eb-4f3e-8274-26cff4bea7e7)
![Captura de pantalla 2024-07-06 121637](https://github.com/JaviQuilumba/MicroservicesSupermarket/assets/167824357/c1b070b4-fc0b-4e23-b68b-9659dba26e62)

In the screenshots you can see how it works.

http:localhost:8095/api/clients

http:localhost:8096/api/products

http:localhost:8094/api/send-welcome-email

## Warning:
<p>
The above instructions are for local execution with Docker Desktop.

To deploy to AWS EC2, the following requirements must be taken into account:
</p>

 - Cuenta en DockerHub
 - Cuenta en AWS
 - Creación de una instancia en AWS EC2

 Since we will need the following variables stored in the GitActions for its correct execution:

- secrets.EC2_HOST: IP instance.
- secrets.DOCKERHUB_USERNAME: user of the DockerHub account.
- secrets.DOCKERHUB_TOKEN: DockerHub login token.
- secrets.AWS_PRIVATE_KEY: AWS generated key pair.

###  Collaborators  :boy:
Carlos Daniel Tapia Ortiz
https://github.com/cdto17

###  License :page_facing_up:
This project is licensed under the (AFL-3.0) License - see the [LICENSE](https://opensource.org/license/afl-3-0-php) file for details.

