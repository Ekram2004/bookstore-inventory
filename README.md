# 📚 Bookstore API

A RESTful API for managing books in a bookstore, built with Node.js, Express, and MongoDB.

## 🚀 Features

- Add new books
- Update stock quantity
- Search books by title, author, or genre
- Input validation & error handling

## 🛠️ Tech Stack

- Node.js
- Express
- MongoDB + Mongoose

## 📦 Setup Instructions

```bash
git clone https://github.com/YOUR_USERNAME/bookstore-api.git
cd bookstore-api
npm install

Create a .env file:
MONGODB_URI=your_mongo_connection_string
PORT=3000
npm start

📌 API Endpoints

Method	Endpoint	Description
POST	/books	Add a book
PUT	/books/:id	Update stock
GET	/books?query=...	Search books

books
🤝 Contributing
Pull requests welcome! For major changes, please open an issue first.

📜 License
MIT

