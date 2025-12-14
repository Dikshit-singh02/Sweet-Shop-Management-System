# Sweet Shop Management System

A full-stack web application for managing a sweet shop's inventory, sales, and customer interactions. Built with React (frontend) and Node.js/Express (backend) with MongoDB database.

## 🚀 Features

### User Management
- User registration and authentication
- JWT-based secure login system
- Role-based access control

### Sweet Management
- Add, edit, and delete sweets from inventory
- View detailed sweet information (name, price, description, quantity)
- Real-time inventory tracking

### Sales & Purchase
- Purchase sweets with quantity selection
- Automatic inventory updates after purchases
- Sales history tracking

### Dashboard
- Overview of available sweets
- User-friendly interface for managing operations
- Responsive design for mobile and desktop

## 🛠️ Tech Stack

### Frontend
- **React 19.2.0** - Modern JavaScript library for building user interfaces
- **React Router DOM 7.10.1** - Declarative routing for React
- **Axios 1.13.2** - HTTP client for API requests
- **JWT Decode 4.0.0** - Decode JWT tokens
- **Vite 7.2.4** - Fast build tool and development server

### Backend
- **Node.js** - JavaScript runtime
- **Express 4.19.2** - Web application framework
- **MongoDB 9.0.1** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT 9.0.3** - JSON Web Token implementation
- **bcryptjs 3.0.3** - Password hashing
- **CORS 2.8.5** - Cross-origin resource sharing

### Development Tools
- **Nodemon 3.1.11** - Auto-restart server during development
- **Jest 30.2.0** - Testing framework
- **ESLint** - Code linting
- **Supertest 7.1.4** - HTTP endpoint testing

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager
- **MongoDB** (local installation or cloud service like MongoDB Atlas)
- **Git** for version control

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Sweet-Shop-Management-System
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

Edit the `.env` file with your configuration:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/sweet-shop
JWT_SECRET=your-super-secret-jwt-key
NODE_ENV=development
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies
npm install
```

### 4. Database Setup

Make sure MongoDB is running on your system. If using MongoDB Atlas, update the `MONGODB_URI` in your `.env` file accordingly.

## 🚀 Running the Application

### Development Mode

#### Start Backend Server
```bash
cd backend
npm run dev
```
The backend server will start on `http://localhost:5000`

#### Start Frontend Development Server
```bash
cd frontend
npm run dev
```
The frontend will be available at `http://localhost:5173`

### Production Build

#### Build Frontend
```bash
cd frontend
npm run build
```

#### Start Backend in Production
```bash
cd backend
npm start
```

## 📁 Project Structure

```
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
├── .gitattributes
└── README.md
```

## 🔗 API Endpoints

### Authentication Routes
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Sweet Management Routes (Protected)
- `GET /api/sweets` - Get all sweets
- `POST /api/sweets` - Add new sweet (Admin only)
- `PUT /api/sweets/:id` - Update sweet (Admin only)
- `DELETE /api/sweets/:id` - Delete sweet (Admin only)
- `POST /api/sweets/:id/purchase` - Purchase sweet

## 🧪 Testing

### Backend Tests
```bash
cd backend
npm test
```

### Frontend Linting
```bash
cd frontend
npm run lint
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Dikshit Singh**

## 🙏 Acknowledgments

- React community for excellent documentation
- Express.js for robust backend framework
- MongoDB for reliable database solution

