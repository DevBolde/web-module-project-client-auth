import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Login from './Components/Login';
import AddFriend from './Components/AddFriend';
import FriendsList from './Components/FriendsList';
import Logout from './Components/Logout';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='App-nav'>
          <h1>FRIEND DATABASE</h1>
          <nav>
            <Link to="/login">Login.</Link>&nbsp;
            <Link to="/friends/add">Add Friend.</Link>&nbsp;
            <Link to="/friends">Friends List.</Link>&nbsp;
            <Link to="/logout">Logout.</Link>
          </nav>
        </div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/friends/add" element={<AddFriend />} />
          <PrivateRoute path="/friends" element={FriendsList} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

