# chefcito_plus
Taste the happiness.

## Table of Contents
* [Description](#description)
* [Install](#install)
* [Use](#use)

## Description
Chefsito+ is a web application designed for individuals seeking online recipes. Users can search for recipes, add them to their personal lists, leave comments, and remove items from their lists if they no longer require them.

## Install
* Clone the project source code

* To verify Node.js installation, type "node -v" in your command line. If Node is absent, access the Node.js website for installation. Run the following line of code in your terminal to install all the needed packages: 
```
npm i 
```

* Connect to MySQL database with your own database credentials
```
mysql -u root -p
``` 

* Create the database schema
```
source db/schema.sql;
```
![Create the database schema](./images/image1.gif)

* Exit the database
```
mysql> exit
```

* Seed the database from the command line.
```
npm run seed
```
![Seed the database](./images/image2.gif)

* Start the application’s server and syncs sequelize models to a MySQL database on the server start.
```
npm start
```
![Start the application’s server](./images/image3.gif)

## Use
* Demonstration 1.  

![Demo1](./images/image4.gif)  

* Demonstration 2.  

![Demo2](./images/image4.gif) 

* Demonstration 3.  

![Demo3](./images/image4.gif)