const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
    const cors = require('cors');
// imporrting 


// Loading environment variables
  dotenv.config();

// Creating app
   const app = express();

// Middlewares
 app.use(cors());


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.static(path.join(__dirname, 'public'))); 


//  serves index signup.html, login.html, etc.

// Routes
const authRoutes = require('./routes/authRoutes');

const blogRoutes = require('./routes/blogRoutes');



//  API routes
app.use('/api/users', authRoutes);
app.use('/api/blogs', blogRoutes);



// dashboard pe naa jaaye 
app.get('/', (req, res) => res.redirect('/dashboard.html'));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log(' MongoDB connected'))
  .catch((err) => console.error(' MongoDB error:', err));

// Starting server: Ashika 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));





