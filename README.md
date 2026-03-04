# Login Application (React + Node.js)

This project is a simple login application built using React for the frontend and Node.js with Express for the backend.

## Features

- Login page with username and password
- Backend authentication API
- Welcome page after login (featuring a dynamic greeting and real-time clock)
- Error handling for incorrect credentials
- Username remembered using LocalStorage
- Brute-force protection via Express rate limiting
- Secure password validation using bcrypt hashing
- Modern "glassmorphism" aesthetic UI

## Technologies Used

Frontend
- React (via Vite)
- React Router DOM
- Axios
- Vanilla CSS Variables

Backend
- Node.js
- Express
- Bcrypt
- Dotenv
- Express-rate-limit
- Cors & Body-parser

## File Structure

```text
login-app/
├── backend/
│   ├── .env               # Environment variables
│   ├── package.json       # Node dependencies
│   └── server.js          # Express backend application
└── frontend/
    ├── index.html         # Main HTML entry point
    ├── package.json       # React dependencies
    ├── vite.config.js     # Vite bundler configuration
    └── src/
        ├── App.jsx        # App router structure
        ├── Login.jsx      # Login page component
        ├── Welcome.jsx    # Authenticated welcome component
        ├── main.jsx       # React DOM logic
        └── index.css      # Custom styling
```

## Test Credentials

Username: admin  
Password: admin

## Run Locally

Backend

```bash
cd backend
npm install  
node server.js
```

Frontend

```bash
cd frontend
npm install  
npm run dev
```
