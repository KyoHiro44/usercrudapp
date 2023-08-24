import React, { useState } from 'react';
import './App.css';
import AdminPanel from './components/AdminPanel';
import UserProfile from './components/UserProfile';

function App() {
  const [users, setUsers] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <div className="App">
      <div className="header">
        <h1>Sistema de CRUD com Login</h1>
      </div>
      <div className="content">
        {isAdmin ? (
          <AdminPanel users={users} setUsers={setUsers} />
        ) : (
          <UserProfile users={users} />
        )}
      </div>
      <div className="footer">
        <button onClick={() => setIsAdmin(!isAdmin)}>
          {isAdmin ? 'Acessar como Usuário' : 'Acessar como Admin'}
        </button>
      </div>
    </div>
  );
}

export default App;
