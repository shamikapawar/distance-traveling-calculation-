# Vehicle-Travel-Details

## Prerequisites

- Node.js installed on your machine
- MySQL database server running
- Postman (optional, for testing API requests)

1. extarct the zip on folder
2. open the folder in vs code

## Database Setup

1. Open MySQL Workbench or your preferred SQL client.
2. Create a database and tables using the following SQL queries:

```sql
CREATE DATABASE TripDatabaseNew;

USE TripDatabaseNew;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE trips (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  trip_name VARCHAR(255),
  csv_file_path VARCHAR(255),
  total_distance DECIMAL(10, 2),
  travel_duration VARCHAR(255),
  stoppages VARCHAR(255),
  overspeed_duration VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);



4)  open terminal on vs code then Navigate to the frontend directory: (cd  Frontend)
5) Run the development server  (npm run dev)
6) Open another terminal and navigate to the backend directory:     (cd  backend)
7) Start the backend server: (npm start)

8) 1. Register a New User
Open Postman (or another API client).

Send a POST request to the following endpoint:
 POST http://localhost:4448/register

In the request body, send the following JSON data:

{
  "email": "john.doe110@example.com",
  "password": "12345678"
}


9) and then login the by ({"email":"john.doe110@example.com","password":"12345678"})


```
