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


# Status Code
200 - 299: Success
    200 OK, 201 Created
300 - 399: Redirect
    301: Redirect
400 - 499: Client error
    400: Bad request. Data sent by client doens't match the data requried by backend. 
    401: Unauthorized (login xa tara access xaina)
    403: Unauthenticated (Login xaina)
    404: Resource not available 
500 - 599: Server error
    500, 501, 503 => Server error. 


Middleware:
1. Request receive
2. Middleware
3. Request handle

A task that needs to be done on most of your api request. 
1. Body parser => All post & put request jasma body aauxa, 
2. File/image upload => actual file will be saved on device => The string will be saved on database. 
3. Authentication => Check if the user is logged in or not