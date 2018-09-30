# HTTP Routing (Without Express)
======

## Feature
- Basic RESTful API HTTP Server without using Express
- Uses the filesystem or memory to mock a database
- Contains a parser for http requests


## Configuration 
- 1) Fork and/or clone repository
- 2) Npm install in root folder
- 3) Create a .env file to add port and storage variables i.e., `PORT=3000` and `STORAGE=filesystem`

## `/api/vi/notes`

* `POST` request
 * pass data as stringifed JSON in the body of a **POST** request 
* `GET` request
 * pass `?id=<uuid>` as a query string parameter to identify a specific resource
 * `DELETE` request
  * pass `?id=<uuid>` as a query string parameter to identify a specific resource
  
