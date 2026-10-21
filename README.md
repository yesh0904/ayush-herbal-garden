# AYUSH Herbal Garden — Virtual Herbal Garden

A full-stack educational project for exploring medicinal plants and traditional herbal knowledge. The repository is organized into a React frontend and a Node.js/Express backend, with MongoDB integration through Mongoose.

> **Academic project portfolio note:** This repository is based on the uploaded project archive. Please verify that the code and feature status match the version approved by your college before publishing. The README deliberately distinguishes configured/planned integrations from functionality that still needs testing.

## Project structure

```text
AYUSH-HERBAL-GARDEN/
├── backend/
│   ├── models/
│   │   └── Plant.js
│   ├── routes/
│   │   └── plantRoutes.js
│   ├── db.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── data/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── ...
│   └── package.json
├── .gitignore
└── README.md
```

## Technology stack

- **Frontend:** React, JavaScript, CSS
- **Backend:** Node.js, Express.js
- **Database integration:** MongoDB with Mongoose
- **API style:** REST endpoints
- **Development/testing:** npm; test API routes with a tool such as Postman

## Features and scope

The source tree contains UI components and page modules for plant browsing, plant details, chatbot-style interaction, quizzes, guided tours, bookmarks/personal garden, and a disease/symptom demonstration. The backend contains plant model and route files.

Feature availability may vary by page and route wiring. Verify each feature locally before describing it as complete. In the current source, the chatbot appears to be a demonstration rather than an external AI integration. The symptom/disease area must not be represented as a clinically validated diagnostic system.

## Prerequisites

- Node.js (LTS recommended)
- npm
- MongoDB running locally, or a MongoDB connection string you are authorized to use

## Setup

### 1. Backend

Open a terminal at the repository root:

```bash
cd backend
npm install
```

Configure the MongoDB connection using the method supported by `backend/db.js`. If you change the application to use environment variables, keep real credentials in a local `.env` file and never commit that file.

Start the API using the script in `backend/package.json`, if provided. Otherwise, inspect `backend/server.js`; the project has been configured around port `3001`.

### 2. Frontend

Open a second terminal at the repository root:

```bash
cd frontend
npm install
npm start
```

If the frontend package manifest does not define a `start` script, use the scripts listed in `frontend/package.json` and update this section to match the working command.

### 3. Verify the connection

- Confirm the backend starts without errors.
- Confirm MongoDB connects successfully.
- Check the plant endpoint in a browser or API client at `http://localhost:3001/plants` if the server route is mounted at `/plants`.
- Confirm the frontend can retrieve and display plant records.
- Check the browser console and backend terminal for errors.

## Security and deployment notes

- Do not commit `.env` files, database credentials, API keys, or personal tokens.
- Review destructive endpoints before deploying. In particular, verify the behavior and access control of any route that deletes plant records. Do not expose destructive database operations publicly without appropriate authorization.
- A frontend deployed on GitHub Pages cannot host the Node.js API or MongoDB server. Deploy the frontend and backend separately if a live full-stack demo is needed.
- Keep sample or test data free of private information.
