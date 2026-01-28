# Introduction
Design Pattern: How will we design our system. 

Backend:
1. Handle Frontend request/response
2. Implement core business logic. 
3. Authentication/Authorization.
4. Interaction with Database

MVC => Model View Controller

Model => Interaction with Database
 => Schema(Blue print for database | Validation for database | Constraints) [Fields]

View => Interagtion with Frontend | Handle Frontend request/response
 => Routes (/about-us, /services)

Controller => Implement core business logic | Authentication/Authorization
 => When FE says, i need about-us data then controller will decide which table & which field to fetch & provides response accordingly.
 => Middleware

