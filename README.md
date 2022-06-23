# GoGrow-Challenge - Lahitte Mauricio #

GoGrow API to support the login form

## Set-Up & Running 🔧 ##

Instructions to have everything you need to put this deployment into operation.

### Prerequisites 📋 ###

* NodeJS installed.
* A web browser (Mozilla, Chrome, Safari, etc).
* Postman (Just if you like to see prettier the API responses).

### Install 🛠️ ###

Once you have cloned or downloaded a .zip of the project in a folder of your like run:
```
npm install
```
just to have all the dependence packages necessaries to run the server.

### Run 📦 ###

After the install process you have to configure the enviroment variable (below explained), and then just have to run:
```
npm run dev 
```
and the server will bound with the default configuration. You will see debugs on the console.

### Script check ###

To check the API documentation, acces to _'http://localhost:<APP_PORT>/docs'_ in your browser, and you will see the Swagger doc.


## Misc configuration ⚙️ ##

This project has a enviroment config file ".env"

You can modify the values in it, or just make your own configs in it.

### Changin the enviroment  ⌨️ ###

* $env:NODE_ENV="development" (Windows)
* set NODE_ENV=development (Linux and Mac)

## Running tests 🔩 ##

NOTE: you have to run the server first.
To run the automated test you can just run:
```
npm run test
```
and the results will be displayed at the console.

## Author ✒️

* [Lahite, Mauricio Eduardo](https://www.linkedin.com/in/mauricio-lahitte/)