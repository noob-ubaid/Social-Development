<<<<<<< HEAD
# 📘 Social Impact Connect

🔗 **Live Link:** [https://social-development-by-ubaid.netlify.app](https://social-development-by-ubaid.netlify.app)

---

## 🎯 Purpose

To create a **community-driven platform** where individuals can discover, create, join, and manage local **social development events** — such as clean-up drives, tree plantations, or donation campaigns — making it easier for people to participate in meaningful social work and bring positive change to their communities.

---

## 🚀 Key Features

- **404 Page:** Custom error page for undefined routes to enhance user navigation.
- **Authentication System:** Email/password login & registration using Firebase Authentication with Google social login support. Secure password validation included.
- **Protected Routes with JWT:** Private pages like Create Event, Manage Events, and Joined Events are accessible only after login. JWT tokens are generated, stored, and validated securely.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop devices.
- **Create Event Page:** Authenticated users can create events with fields like title, description, type (Cleanup, Plantation, etc.), image URL, location, and future-only date selection using `react-datepicker`.
- **Upcoming Events Page:** Public page displaying upcoming events in a grid layout, with filtering and searching by event name. Includes "View Event" and "Join Event" functionality.
- **Event Details + Join Event:** Dynamic private route showing full event details and allowing users to join events, with join data stored in the database.
- **Joined Events Page:** Displays all events joined by the logged-in user, sorted by event date for easy tracking.
- **Manage Events Page:** Authenticated users can view, update, and delete the events they created, ensuring secure ownership validation.
- **Search & Filter with Backend (MongoDB):** Users can filter events by type and search by event name, with functionality powered by backend MongoDB queries.
- **Dark/Light Theme Toggle:** Allows users to switch between light and dark themes.
- **Home Page Features:** Includes a banner, static gallery, newsletter subscription design, and a features section explaining the platform’s mission.

---

## 🛠️ Tech Stack Used

### 🚀 Frontend (React + Vite)

- **React Router DOM** – Client-side routing for seamless page navigation.
- **Firebase** – Authentication system (email/password + Google social login).
- **Axios** – Handling HTTP requests to communicate with the backend.
- **React Toastify / SweetAlert2** – User-friendly success and error notifications.
- **React Datepicker** – Allows future-date selection when creating events.
- **Framer Motion** – Adds animations and smooth transitions to enhance UX.
- **Tailwind CSS** – Utility-first CSS framework for building responsive layouts.
- **DaisyUI** – Pre-styled components for faster and consistent UI development.
- **React Icons** – Icon library for enhancing the UI with scalable icons.

---

### 🌐 Backend (Node.js + Express)

- **Express** – Web server framework for routing and middleware management.
- **CORS** – Enables secure Cross-Origin Resource Sharing for API access.
- **Dotenv** – Manages environment variables securely.
- **MongoDB** – Database driver for storing and managing event and user data.
- **JSON Web Token (JWT)** – Token creation and verification for protected routes.
- **Cookie Parser** – Parses cookies from client requests for session handling.

=======
📘 Name : Social Impact Connect 🔗 Live Link: https://social-development-by-ubaid.netlify.app

Purpose : To create a community-driven platform where individuals can discover, create, join, and manage local social development events — such as clean-up drives, tree plantations, or donation campaigns — making it easier for people to participate in meaningful social work and bring positive change to their communities.

🚀 Key Features This project is a community-driven social event platform built with a focus on user engagement, responsiveness, and backend integration.

404 Page : Custom error page for undefined routes to enhance user navigation.

Authentication System : Email/password login & registration with Firebase Authentication, along with Google social login support. Passwords are validated for security.

Protected Routes with JWT : Private pages like Create Event, Manage Events, and Joined Events are accessible only after login. JWT tokens are generated, stored, and validated for secure access.

Responsive Design : The entire application is fully optimized for mobile, tablet, and desktop devices.

Create Event Page : Authenticated users can create social events with fields like title, description, type (e.g., Cleanup, Plantation), image URL, location, and future-only date selection using react-datepicker.

Upcoming Events Page : Public page showing only future-dated events in a grid layout, with filters and search by event name. Includes "View Event" and "Join Event" functionality.

Event Details + Join Event : Dynamic private route page displaying full event info and allowing users to join. Joins are stored in the database along with user and event data.

Joined Events Page : Shows all events joined by the logged-in user, sorted by event date for easy tracking.

Manage Events Page : Authenticated users can view, update, and optionally delete events they have created. Ensures secure update access only for the creator.

Search & Filter with Backend (MongoDB) : Users can filter events by type and search events by name. Functionality powered by MongoDB queries on the backend.

Dark/Light Theme Toggle : A UI toggle allows users to switch between light and dark themes for improved accessibility and preference.

Home Page Features : Includes a banner, static gallery, newsletter subscription design, and a features section that outlines the platform’s mission.

npm packages i have used : For Frontend : react-router-dom – For client-side routing

firebase – Firebase Authentication (email/password + social login)

axios – Making API requests to the backend

react-toastify or sweetalert2 – For success and error alerts/toasts

react-datepicker – Date picker for future event selection

framer-motion – Optional: for animations and transitions

tailwindcss – Utility-first CSS framework for styling

daisyui or similar UI library – Ready-made styled components (optional)

react-icons – Icon library for UI elements

For Backend : express – Web server framework

cors – Handles Cross-Origin Resource Sharing

dotenv – Load .env environment variables

mongodb – MongoDB Node.js driver

jsonwebtoken – For creating and verifying JWT tokens

cookie-parser – To parse cookies from client requests
>>>>>>> 8661096 (Update README.md)
