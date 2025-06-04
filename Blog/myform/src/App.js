// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './Component/AutoContext'; // Import AuthProvider
import Home from './Component/header';
import About from './Component/aboutus';
import Contact from './Component/contact';
import Signup from './Component/Signup';
import Login from './Component/Login';
import Himalayas from './Component/himalayas';
import Pondicherry from './Component/pondicherry';
import Ooty from './Component/ooty';
import Kodaikanal from './Component/kodaikanal';
// import './Component/navbar.css';
import './Component/style.css';
// ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <nav>
          <ul>{/* <ul style={{ listStyle: 'none', display: 'flex', padding: '10px' }}> */}
          <li>
            <img src='https://img.freepik.com/premium-vector/word-concept-color-geometric-shapes-blog_205544-13021.jpg' alt="images/blog.png" id='image'/>
          </li>
          <li id="blogname">
            BlogVenture
          </li>
            <li>
              <Link class="link" to="/">Home</Link>
            </li>
            <li>
              <Link class="link" to="/about">About</Link>
            </li>
            <li>
              <Link class="link" to="/contact">Contact</Link>
            </li>
            <li>
              <Link class="link" to="/signup">Signup</Link>
            </li>
            <li>
              <Link class="link" to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
          <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/1" element={<Himalayas />} />
          <Route path="/2" element={<Pondicherry />} />
          <Route path="/3" element={<Ooty />} />
          <Route path="/4" element={<Kodaikanal />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
