# 🏡 Resa – Property Reservation Platform

Resa is a **full-stack property reservation platform** built for the Tunisian market, enabling seamless booking and management of properties.  
It provides **role-based access** for visitors, clients, and property owners, ensuring a secure and intuitive experience.

---

## 🚀 Technologies

- ⚛️ **React.js** – Frontend (dynamic UI & responsive design)  
- 🟢 **Nest.js** – Backend API (secure, scalable, and modular)  
- 🍃 **MongoDB** – Database (NoSQL for flexible data storage)  
- 💳 **Stripe** – Online payments (deposits & transactions)  
- ☁️ **Vercel** – Deployment (fast, scalable hosting)  

---

## ✨ Features

### 🔐 Authentication & Roles
- **Visitors**: Browse properties, view details, and search by destination.
- **Clients**: Create an account, manage bookings, and view payment history.
- **Owners**: Manage property listings, availability, pricing, and promotions.

### 🖥️ Back-Office Tools
- Property management dashboard  
- Pricing and promotions management  
- Deposits and payments integration with **Stripe**  

### 🌐 Front-Office Features
- User registration & login  
- Advanced property search & booking  
- Profile management & booking history  

---

## 📦 Project Setup

### ⚡ Prerequisites
Ensure you have the following installed:
- **Node.js** (v16+)
- **MongoDB** (local or Atlas cluster)
- **npm** or **yarn**
- **Stripe** account for payment integration

### 🔧 Installation

Clone the repository:
```bash
git clone https://github.com/yourusername/Resa.git
cd Resa
```
Install dependencies:

# Frontend
cd client
npm install

# Backend
cd ../server
npm install


Create a .env file in the backend with:

MONGO_URI=your_mongo_connection
JWT_SECRET=your_jwt_secret
STRIPE_KEY=your_stripe_secret_key


Run the development servers:

# Start backend
cd server
npm run start:dev

# Start frontend
cd ../client
npm start

🗄️ Database

MongoDB is used to store users, properties, bookings, and transactions.

Make sure to create a MongoDB database and update the connection string in your .env file.

🌍 Deployment

This project is deployed on Vercel
 for scalable and efficient hosting.
You can also deploy the backend on services like:

Render

Railway

Heroku

AWS EC2

📸 Screenshots
Home Page	Booking Page	Owner Dashboard
🏠	📅	📊
👥 Authors

Developed by Your Name
