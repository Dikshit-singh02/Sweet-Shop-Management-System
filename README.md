<img width="1917" height="1079" alt="Screenshot 2025-12-14 223852" src="https://github.com/user-attachments/assets/3a26ec1b-dd71-4ec6-93b1-2ee19efa239c" />🍬 Sweet Shop Management System

A full-stack Sweet Shop Management System built as part of a TDD Kata to demonstrate clean architecture, RESTful API design, authentication, frontend integration, and responsible AI-assisted development.

🎯 Objective

The goal of this project is to design, build, and test a production-ready full-stack application that manages sweets inventory, user authentication, and purchases, following Test-Driven Development (TDD) and modern software engineering best practices.

🚀 Features
🔐 Authentication & Authorization

User registration and login

JWT-based authentication

Role-based access control (Admin / User)

🍭 Sweet Management (Admin)

Add new sweets

Edit existing sweets

Delete sweets

Restock sweets

🛒 Inventory & Purchase

View all available sweets

Purchase sweets (quantity automatically decreases)

Purchase button disabled when quantity is zero

🔎 Search & Browse

View sweets by name, category, and price

Clean and responsive UI

🛠️ Tech Stack
Frontend

React + Vite

React Router DOM

Axios

JWT Decode

CSS (custom styling)

Backend

Node.js

Express

MongoDB + Mongoose

JWT Authentication

bcryptjs

Jest & Supertest (Testing)

📁 Project Structure
Sweet-Shop-Management-System/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   └── sweetController.js
│   │   ├── middleware/
│   │   │   ├── adminMiddleware.js
│   │   │   └── authMiddleware.js
│   │   ├── models/
│   │   │   ├── Sweet.js
│   │   │   └── User.js
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   └── sweetRoutes.js
│   │   └── tests/
│   │       └── auth.test.js
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   │   ├── authApi.js
│   │   │   ├── axiosInstance.js
│   │   │   └── sweetApi.js
│   │   ├── components/
│   │   │   ├── auth/
│   │   │   │   ├── Login.jsx
│   │   │   │   └── Register.jsx
│   │   │   ├── common/
│   │   │   │   ├── Footer.jsx
│   │   │   │   ├── Navbar.jsx
│   │   │   │   └── ProtectedRoute.jsx
│   │   │   └── sweets/
│   │   │       ├── AddSweet.jsx
│   │   │       ├── EditSweet.jsx
│   │   │       ├── PurchaseSweet.jsx
│   │   │       ├── SweetCard.jsx
│   │   │       └── SweetList.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── hooks/
│   │   │   └── useAuth.js
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Home.jsx
│   │   │   └── NotFound.jsx
│   │   ├── styles/
│   │   │   ├── main.css
│   │   │   └── variables.css
│   │   ├── utils/
│   │   │   └── authHelper.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── routes.jsx
│   ├── package.json
│   └── vite.config.js
│
├── .gitattributes
└── README.md

🔗 API Endpoints
Auth

POST /api/auth/register

POST /api/auth/login

Sweets (Protected)

GET /api/sweets

GET /api/sweets/search

POST /api/sweets (Admin)

PUT /api/sweets/:id (Admin)

DELETE /api/sweets/:id (Admin)

POST /api/sweets/:id/purchase

POST /api/sweets/:id/restock (Admin)

🧪 Test-Driven Development (TDD)

Backend logic developed using Red → Green → Refactor

Jest & Supertest used for API testing

Authentication and authorization flows are tested

Edge cases like out-of-stock purchase are handled

▶️ How to Run Locally
Backend
cd backend
npm install
npm run dev

Frontend
cd frontend
npm install
npm run dev


Backend: http://localhost:5000

Frontend: http://localhost:5173

🧠 My Contribution

I personally designed and implemented:

Complete backend architecture (controllers, routes, middleware)

JWT-based authentication and role-based authorization

RESTful APIs for sweet management and inventory

Full React frontend with protected routes

Admin and user-specific UI controls

Axios API abstraction layer

Auth context and hooks

Debugged blank-screen routing issues

Integrated frontend with backend securely

Ensured clean folder structure and readable code

This project reflects my understanding of full-stack development, not just UI or APIs in isolation.

🤖 My AI Usage
Tools Used

ChatGPT

How I Used AI

To clarify API design decisions

To debug routing and blank-screen issues

To generate boilerplate suggestions, which I reviewed and modified

To validate JWT and authentication flows

To improve README documentation quality

Reflection

AI significantly improved my productivity and debugging speed.
However, all final decisions, logic, and integration were done by me.
I treated AI as a pair programmer, not a replacement for understanding.

📸 Screenshots

(Add screenshots of Home, Login, Dashboard, Sweet List, Admin Add Sweet page)
<img width="1917" height="1079" alt="Screenshot 2025-12-14 223852" src="https://github.com/user-attachments/assets/83f0d9e7-4ef1-4033-ba7f-0f56083e2d18" />
<img width="1917" height="1079" alt="Screenshot 2025-12-14 223852" src="https://github.com/user-attachments/assets/949de48f-381a-497c-92d4-f953c6ad6c12" />
<img width="1917" height="1079" alt="Screenshot 2025-12-14 223852" src="https://github.com/user-attachments/assets/0f7f4afa-8eee-4710-b7ee-97ec2f1c0aba" />
<img width="1917" height="1079" alt="Screenshot 2025-12-14 223852" src="https://github.com/user-attachments/assets/88797939-606e-447b-92de-8141f2ec0bd6" />
<img width="1917" height="1079" alt="Screenshot 2025-12-14 223852" src="https://github.com/user-attachments/assets/52c4dc4c-5c46-47f1-b6c8-6bc3ee2a44af" />


👨‍💻 Author

Dikshit Singh
MCA | Full Stack Developer | MERN Stack

✅ Conclusion

This project demonstrates:

Real-world full-stack architecture

Secure authentication

Inventory logic

Clean React routing

TDD mindset

Responsible AI usage
