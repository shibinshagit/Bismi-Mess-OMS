// App.jsx
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './Users';
import CreateUser from './createorder';
import UpdateUser from './UpdateUser';
import Settings from './settings';
import Login from './login';
import NotFound from './pages/NotFound';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/"
            element={isLoggedIn ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />}
          />
          {isLoggedIn ? (
            <>
              <Route path="/home" element={<Users />} />
              <Route path="/settings/:id" element={<Settings />} />
              <Route path="/create" element={<CreateUser />} />
              <Route path="/update/:id" element={<UpdateUser />} />
              <Route path="*" element={<NotFound />} /> {/* Catch-all route for authenticated users */}
            </>
          ) : (
            <>
            <Route path="*" element={<Navigate to="/" />} />
            </> 
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
