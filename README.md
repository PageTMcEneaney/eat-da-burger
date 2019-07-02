# eat-da-burger
--------------------------------
## Overview
--------------------------------
This app is a burger logger created withwith MySQL, Node, Express, Handlebars and a homemade ORM. It follows the MVC design pattern; using Node and MySQL to query and route data in the app, and Handlebars to generate the HTML.

DEPLOYED ON HEROKU: https://fathomless-caverns-38558.herokuapp.com/

--------------------------------
## Instructions & Use
--------------------------------

    "/"
Home Page

    > Submit
Click submit to add a new burger to the database. New burger will display under Available Burgers

    > Devour
Click devour to "eat" a burger, which moves the burger over to the Eaten Burgers section

    > Delete Order
Click to remove a burger entirely from the database and the Available burgers section.

    > Order Again
Click to "re-order" a burger that has already been eaten. This moves the burger back to the Evailable Burgers section.

    "/api/all"
User can view all the existing burgers in JSON format

--------------------------------
## Required to run
--------------------------------
 - node.js
 - bash / terminal
 - npm
 - express
 - express-handlebars
 - dotenv
 - mysql
 - mysql workbench or CLI
 - all files in folder

--------------------------------
## Deployed
--------------------------------
App is deployed through Heroku: https://fathomless-caverns-38558.herokuapp.com/