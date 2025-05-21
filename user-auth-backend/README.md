# User Authentication Backend

This project provides a simple user authentication system using Node.js and Express. It allows users to sign up and log in, managing user data with a SQL database.

## Project Structure

```
user-auth-backend
├── src
│   ├── controllers
│   │   └── authController.js
│   ├── models
│   │   └── userModel.js
│   ├── routes
│   │   └── authRoutes.js
│   ├── db
│   │   └── index.js
│   └── app.js
├── package.json
├── .env
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd user-auth-backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your environment variables, such as database connection strings and secret keys.

## Usage

1. Start the server:
   ```
   npm start
   ```

2. The server will run on `http://localhost:3000` (or the port specified in your `.env` file).

## API Endpoints

- **POST /api/auth/signup**: Create a new user account.
- **POST /api/auth/login**: Log in an existing user.

## Database

This project uses a SQL database to manage user data. Ensure that your database is set up and the connection details are correctly specified in the `.env` file.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes. 

## License

This project is licensed under the MIT License.