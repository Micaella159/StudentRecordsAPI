
# Student Records API

A RESTful API built using Node.js and Express.js for managing student records.

## Features

- Retrieve all students
- Retrieve a student by ID
- Create a new student
- Update student information
- Delete a student
- Validate request data
- Return appropriate HTTP status codes

## Student Fields

- `id`: Unique student ID
- `name`: Student's full name
- `course`: Student's course
- `yearLevel`: Student's year level (1–4)

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | / | Check API status |
| GET | /api/students | Retrieve all students |
| GET | /api/students/:id | Retrieve one student |
| POST | /api/students | Create a student |
| PUT | /api/students/:id | Update a student |
| DELETE | /api/students/:id | Delete a student |

## Requirements

- Node.js
- npm

## Installation

1. Clone this repository.
2. Install dependencies:

   npm install

3. Start the server:

   node server.js

4. Open http://localhost:3000

## Testing

Test the endpoints using Postman.

For POST and PUT requests, select Body > raw > JSON.

Example request body:

{
  "name": "Ana Reyes",
  "course": "BSIT",
  "yearLevel": 3
}

## Important Note

This project stores records in an in-memory array.
Data will reset when the server restarts.

## Technologies

- Node.js
- Express.js
- Postman
- Git and GitHub
