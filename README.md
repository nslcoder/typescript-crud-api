# TypeScript CRUD API

It's a simple RESTful CRUD API built using TypeScript, Node.js, Express and MongoDB with Mongoose.

## Endpoints:

| HTTP Method | URL            | Description             |
| ----------- | -------------- | ----------------------- |
| POST        | /api/posts     | Create a post           |
| GET         | /api/posts     | Gets all the posts      |
| GET         | /api/posts/:id | Gets a post by its id   |
| PUT         | /api/posts/:id | Update a post by its id |
| DELETE      | /api/posts/:id | Delete a post by its id |

## How to Install and Run:

1. Clone the repo:

   git clone https://github.com/nslcoder/typescript-crud-api

2. Go inside the local copy:

   cd typescript-crud-api

3. Install the dependencies:

   npm install

4. Create a `.env` file at the project root and add your database URL:

   DB_URL=mongodb://127.0.0.1:27017/`<yourdbname>`

5. Start the server:

   npm start
