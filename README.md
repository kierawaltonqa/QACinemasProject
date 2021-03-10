
<img src="QACinemasDocumentsFolder\qa%20cinema%20logo.jpg" alt="Logo" width="300"/>  



# Team Spell QACinema Project 


Welcome to team Spell's full stack cinema application. The objective for this project was to create a full-stack web application using the MERN stack. The data layer was created using MongoDb, a non-relational database. The back end, built using Node (a cross-platform javascript runtime compiler) and Express (a web application framework for node), constructs an API. The front was built using React - a front end javascript framework used to create a reactive user interface. This web application was developed and implemented with the goal of... (will finish tomorrow - Kiera)





## Table of contents 
* [Technologies](#Technologies)
* [Prerequisite](#Prerequisite)
* [Installing](#Installing)
* [Testing](#Testing)
* [Deployment](#Deployment)
* [Built With](#Built_With)
* [Versioning](#Versioning)
* [Authors](#Authors)
* [License](#License)
* [Acknowledgments](#Acknowledgments)





## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.  

## Technologies  
* Version Control - Git  
* Source Code Management - GitHub  
* Project Management and Development - Jira Kanban Board  
* Full-Stack Development Technologies:
    * Database Management System - Mongo  
    * Back-End Programming Language - Node  
    * API Development Platform - Express  
    * Front-End Development Framework - React 
* Testing - Mocha and Chai  
    * Coverage - NYC 


### Prerequisite
* [Visual Studio Code](https://code.visualstudio.com/download)
* [Java 14.1](https://www.eclipse.org/downloads/)
* [Git](https://git-scm.com/downloads)
* [Spring Boot](https://spring.io/guides/gs/spring-boot/)
* [MongoDBAtlas](https://www.mongodb.com/cloud/atlas)
* [Postman](https://www.postman.com/downloads/)
* [Node.js](https://nodejs.org/en/download/)


### Installing

1. You will need to clone down the repo  
2. Open the folder in your IDE/VS code 

## Testing

1. In the terminal, run npm test to run the tests once CD'd into backend/frontend  
```
npm test
```
2. In the back end if you wish to get the coverage 
```
npm run coverage
```

Coverage: 88.28% - backend  
![BackEndCoverageTesting](QACinemasDocumentsFolder\FinalCoverage.png)  






## Deployment

1. Starting off with the back end  
This is written in Node.js and uses Express for API development with a connection string to Mongo, this connection string is currently private,
so you will need to import your own connection string.  
Make sure you are in the back end directory in terminal 1.  
Run =>  
```
npm install
npm start
```
You should see the message ```connection has worked``` in your terminal, this means that your DB is now connected and if you wish to test this you can load up Postman and test your URL's and the API's functionality there.   


2. Secondly the front end  
When ready to run the front end - open a second terminal and make sure you are in the front end directory folder.  
Similar to the back end we will need to install the dependencies before being able to run the server.  
Run => 
```
npm install
npm start
```
*This will then spin up a liver server for the project on http://localhost:3000/*  


![](https://placehold.it/350x90/009955/fff?text=SUCCESS!)  
You should now have a fully working MERN stack application!



## Built With

* [Jira](https://code.visualstudio.com/download)
* [Visual Studio Code](https://code.visualstudio.com/download)  


## Versioning

* Version Control System: Git
* Source Code Management: GitHub
* Database Management System: MongoDB  


## Authors

Sam Costello - Developer - [Sam Costello ](https://github.com/scostello-hubQA)  
Mohamud Mussa - Developer - [Mohamud Mussa](https://github.com/MohamudMussa)  
Kiera Walton - Developer - [Kiera Walton](https://github.com/kierawaltonqa)  
Robert Tolley - Developer - [Robert Tolley](https://github.com/RobertTolleyQA)  

## License



## Acknowledgments

* [Vinesh Ghela](https://github.com/vineshghela) & [Aswene Sivaraj](https://github.com/Asivaraj-QA) - Java, databases
* [Nicholas Johnson](https://github.com/nickrstewarttds) - Github
* [Savannah Vaithilingam](https://github.com/savannahvaith) - JavaScript, HTML, CSS, MERN  
* [Alan Davis](https://github.com/MorickClive) - Springboot and overall API development    





