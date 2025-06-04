// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const bcrypt = require('bcrypt');
const User = require('./models/User');
const Contact = require('./models/Contact');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;
// Middleware
app.use(cors()); 
app.use(bodyParser.json());
// Connect to MongoDB
mongoose.connect('mongodb://0.0.0.0:27017/contactFormDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log('MongoDB connection error:', err));

// Session middleware
app.use(session({
  secret: process.env.SESSION_SECRET || 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if you're using HTTPS
}));

// Signup route
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });

    await newUser.save();
    res.status(201).send({ message: 'User registered successfully' });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ error: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ error: 'Invalid credentials' });
    }

    req.session.userId = user._id; // Store user ID in session
    res.status(200).send({ message: 'Login successful', userId: user._id });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

// Contact route
app.post('/contact', async (req, res) => {
  const { email, firstName, lastName, phoneNumber } = req.body;

  try {
    const newContact = new Contact({
      email,
      firstName,
      lastName,
      phoneNumber,
    });

    await newContact.save();
    res.status(200).send({ message: 'Message Sent' });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

// Logout route
app.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).send({ error: 'Could not log out' });
    }
    res.status(200).send({ message: 'Logged out successfully' });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
