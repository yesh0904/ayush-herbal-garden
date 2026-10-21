# AYUSH Virtual Herbal Garden — Virtual Herbal Garden

An interactive web-based educational platform designed to help users explore medicinal plants and learn about traditional herbal knowledge associated with AYUSH systems.

## Overview

AYUSH Virtual Herbal Garden is an academic full-stack web development project that brings medicinal plant information and interactive learning features together in one platform. It aims to make plant-related educational resources easier to explore through a user-friendly interface.

The project uses a React frontend, a Node.js and Express backend, and MongoDB integration to organize the application into separate frontend and backend components.

## Features

- **Interactive Plant Garden** — Browse and explore medicinal plant information.
- **Plant Details** — View available plant descriptions and related information.
- **Search and Filtering** — Find plants using the available browsing controls.
- **Herbal Information Chatbot** — Explore the chatbot interface for herbal information.
- **Interactive Quiz** — Test knowledge of medicinal plants.
- **Guided Tours** — Explore themed learning sections.
- **My Garden** — Access the personal garden and bookmarking interface.
- **Responsive User Interface** — A plant-inspired visual design for an engaging learning experience.

*Feature availability may depend on the current implementation. Chatbot and symptom-related features should not be considered AI-powered or medically validated unless the corresponding functionality has been implemented and tested.*

## Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Web page structure |
| CSS3 | Styling and responsive layouts |
| JavaScript | Application logic and interactions |
| React.js | Frontend development |
| Node.js | Backend runtime |
| Express.js | Backend API and routing |
| MongoDB | Database |
| Mongoose | MongoDB object modelling |
| npm | Package management |

## Project Structure

```text
ayush-herbal-garden/
├── backend/
│   ├── models/
│   │   └── Plant.js
│   ├── routes/
│   │   └── plantRoutes.js
│   ├── db.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   ├── data/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.css
│   │   └── index.js
│   └── package.json
│
├── .gitignore
└── README.md
```

The structure above is illustrative. Keep the folder and file names aligned with the actual files in the repository.

## Getting Started

### Prerequisites

For running the full application, install:

- [Node.js](https://nodejs.org/)
- npm, included with Node.js
- MongoDB, if the backend is configured to use a local database

### Option 1: Open an HTML File Directly

If you only want to inspect a standalone HTML page:

1. Open the repository on your computer.
2. Navigate to `frontend/src/`.
3. Locate the `.html` file you want to view.
4. Double-click the file to open it in your default web browser.

**Important:** React source files such as `App.js`, `index.js`, and component files cannot be run by double-clicking them. If the HTML file loads React modules, fetches separate files, or depends on the backend, opening it directly may not work correctly. In a standard Create React App project, the HTML entry file is normally `frontend/public/index.html`.

### Option 2: Run the React Application

1. Clone or download the repository.
2. Open the project folder in a terminal.
3. Start the frontend:

```bash
cd frontend
npm install
npm start
```

4. Open the local URL displayed in the terminal, usually `http://localhost:3000`.

### Option 3: Run the Full-Stack Application

The backend must run separately when the frontend depends on the API or database.

Open a second terminal:

```bash
cd backend
npm install
npm start
```

Configure MongoDB according to the backend configuration before starting the server. If the API uses port `3001`, verify that the server starts on that port and that the frontend requests the correct API URL.

If the frontend and backend both need to run, keep both terminal sessions open.

## Educational Purpose

This project is intended to support learning and exploration of medicinal plants and traditional herbal knowledge. Information presented in the application should be checked against reliable references.

The application is an educational resource, not a substitute for professional medical advice, diagnosis, or treatment.

## Future Enhancements

Potential improvements include:

- Expanding the medicinal plant information database.
- Adding verified references to plant entries.
- Improving search and filtering.
- Enhancing accessibility and mobile responsiveness.
- Integrating a genuine AI-based herbal information assistant.
- Adding secure user accounts and cloud-based bookmarks.
- Developing and evaluating a plant-identification model, if required.

These are possible future enhancements and should not be interpreted as existing features unless implemented.
