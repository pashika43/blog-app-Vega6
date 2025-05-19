

A full-featured blog application built using Node.js, Express, and MongoDB. This app allows users to create, update, delete, and view blog posts with support for file uploads and user authentication.

---

##Features

- User Authentication (JWT based)
- Create, Read, Update, Delete (CRUD) blog posts
- File upload support (e.g., images)
- Middleware-based request handling
- Organized MVC architecture
- RESTful API endpoints
- Environment configuration using `.env`

---

##Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT
- **File Uploads:** Multer
- **Environment Config:** dotenv

---

##Folder Structure

blog-app-Vega6/
│
├── config/ # Database and config files
├── controllers/ # Route handler functions
├── middleware/ # Custom middleware (e.g., auth)
├── models/ # Mongoose models
├── node_modules/ # Installed npm packages
├── public/ # Static assets
├── routes/ # Express route files
├── uploads/ # Uploaded images/files
│
├── .env # Environment variables
├── package.json # Project metadata and scripts
├── server.js # Entry point
└── README.md # Project documentation

yaml
Copy
Edit

---

## Installation & Setup

1. Clone the repository**
   ```bash
   git clone https://github.com/pashika43/blog-app-Vega6.git
   cd blog-app-Vega6
Install dependencies

bash
Copy
Edit
npm install
Set up environment variables

Create a .env file in the root directory and add:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Run the app

bash
Copy
Edit
npm start
The app will be running on http://localhost:5000.

 API Endpoints (Examples)
Method	Endpoint	Description
POST	/api/users/login	User login
POST	/api/users/signup	User registration
GET	/api/posts/	Get all blog posts
POST	/api/posts/	Create a new post
PUT	/api/posts/:id	Update a blog post
DELETE	/api/posts/:id	Delete a blog post

Note: Some routes may be protected and require a valid JWT token.


JWT_SECRET=mysecretkey123
Made with ❤️ by pashika43
