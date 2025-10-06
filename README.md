# 📚 Book Vibe

> A modern and interactive React + Vite web application that lets users explore books, add them to a wishlist, and track what they’ve read — all in a smooth, context-powered UI.

---

## 🌟 Overview

**Book Vibe** is a React-based frontend project built with **Vite**, **React Router**, and **Context API**.  
It allows users to browse books, view detailed information, and manage personalized lists such as “Read Books” and “Wishlist.”  
Interactive notifications are implemented using **React Toastify** for a seamless user experience.

---

## 🚀 Features

- 📖 Browse a list of books (loaded from `booksData.json`)
- 💾 Add books to **Read List**
- 💙 Add books to **Wishlist**
- 🔄 Move books from Wishlist to Read List
- ⚡ Instant feedback using toast notifications
- 🧭 Nested routing with **React Router**
- 💅 Clean, modular, and scalable component structure

---

## 🧩 Tech Stack

| Category | Technology |
|-----------|-------------|
| Framework | [React](https://reactjs.org/) |
| Build Tool | [Vite](https://vitejs.dev/) |
| Routing | [React Router](https://reactrouter.com/) |
| State Management | React Context API |
| Notifications | [React Toastify](https://fkhadra.github.io/react-toastify/introduction) |
| Language | JavaScript (ES6+) |
| Styling | TAILWINDCSS |
| Package Manager | npm |

---

## 🗂 Folder Structure

```plaintext
Book_vibe/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Banner/
│   │   ├── Books/
│   │   ├── Buttons/
│   │   ├── Card/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── ListedPageComponent/
│   │   └── Tags/
│   ├── context/
│   │   └── BookContext.jsx
│   ├── Pages/
│   │   ├── CardDetails/
│   │   ├── Error/
│   │   ├── ListedBook/
│   │   └── Root/
│   ├── Routes/
│   │   └── Routes.jsx
│   ├── main.jsx
│   ├── index.css
│   └── booksData.json
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
