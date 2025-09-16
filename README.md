# 📖 Chronicle – Blog API

Chronicle is a simple yet scalable **RESTful API for blogging** built with **Node.js, Express, and MongoDB**.  
It allows users to create, read, update, and delete blog posts, with support for authentication and future extensions like image uploads, comments, and likes.  

---

## 🚀 Features
- 🔐 **Authentication & Authorization** – Secure user registration & login  
- 📝 **CRUD for Blogs** – Create, read, update, delete blog posts  
- 🔗 **Slug Support** – SEO-friendly blog URLs  
- ⏱ **Timestamps** – Auto-generated `createdAt` and `updatedAt`  
- 📄 **Scalable Structure** – Separation of controllers, routes, and models   

---

## 🛠 Tech Stack
- **Backend Framework**: [Express.js](https://expressjs.com/)  
- **Database**: [MongoDB + Mongoose](https://mongoosejs.com/)  
- **Authentication**: JWT (JSON Web Tokens)  
- **Environment Management**: dotenv  
- **Validation**: Mongoose schema validators  


---
## ⚡ Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/chronicle.git
cd chronicle
```
### 2️⃣ Install dependencies

```bash
npm install
```
### 3️⃣ Setup environment variables

Create a **.env.<production/development>.local** file in the root:

```bash
PORT=6500
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4️⃣ Run the app
```bash
npm run dev
```

API runs on:
👉 http://localhost:6500/api

## 📌 API Endpoints
### 🔑 Auth

POST **/api/v1/auth/signup** – Register user

POST **/api/v1/auth/login** – Login user

## 📝 Blogs

POST **/api/v1/blogs** – Create a new blog (auth required)

GET **/api/v1/blogs** – Get all blogs

GET **/api/v1/blogs/:slug** – Get blog by slug

PUT **/api/v1/blogs/:id** – Update blog by ID (auth required)

DELETE **/api/v1/blogs/:id** – Delete blog by ID (auth required)

### ✅ Example Blog Schema

---

```bash
{
  "title": "My First Blog",
  "body": "This is the body of the blog",
  "tags": ["tech", "nodejs"],
  "status": "published",
  "image": "https://s3.amazonaws.com/chronicle/blog1.png"
}
```