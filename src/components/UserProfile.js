import React, { useState } from 'react';
import './UserProfile.css';

const UserProfile = ({ users }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const foundUser = users.find(user => user.email === email && user.password === password);
    if (foundUser) {
      alert(`Bem-vindo, ${foundUser.name}!`);
    } else {
      alert('Credenciais inválidas.');
    }
  };

  return (
    <div className="user-profile">
      <h2>Perfil de Usuário</h2>
      <div className="login-form">
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Entrar</button>
      </div>
    </div>
  );
};

export default UserProfile;
