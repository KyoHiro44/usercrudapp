import React, { useState } from 'react';
import './AdminPanel.css';

const AdminPanel = ({ users, setUsers }) => {
  const [newUser, setNewUser] = useState({ name: '', email: '', password: '' });
  const [editingUser, setEditingUser] = useState(null);

  const addUser = () => {
    const existingUser = users.find(user => user.email === newUser.email);
    if (existingUser) {
      alert('Usuário já existe com este e-mail.');
      return;
    }
    setUsers([...users, { ...newUser, id: Date.now() }]);
    setNewUser({ name: '', email: '', password: '' });
  };

  const deleteUser = id => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
  };

  const startEditing = user => {
    setEditingUser(user);
  };

  const saveEdit = () => {
    const updatedUsers = users.map(user =>
      user.id === editingUser.id ? editingUser : user
    );
    setUsers(updatedUsers);
    setEditingUser(null);
  };

  return (
    <div className="admin-panel">
      <h2>Painel de Administração</h2>
      <div className="user-form">
        <h3>Adicionar Novo Usuário</h3>
        <input
          type="text"
          placeholder="Nome"
          value={newUser.name}
          onChange={e => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="E-mail"
          value={newUser.email}
          onChange={e => setNewUser({ ...newUser, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Senha"
          value={newUser.password}
          onChange={e => setNewUser({ ...newUser, password: e.target.value })}
        />
        <button onClick={addUser}>Cadastrar Usuário</button>
      </div>
      <div className="user-list">
        <h3>Lista de Usuários</h3>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {editingUser && editingUser.id === user.id ? (
                <div className="user-info">
                  <input
                    type="text"
                    value={editingUser.name}
                    onChange={e =>
                      setEditingUser({ ...editingUser, name: e.target.value })
                    }
                  />
                  <input
                    type="email"
                    value={editingUser.email}
                    onChange={e =>
                      setEditingUser({ ...editingUser, email: e.target.value })
                    }
                  />
                  <input
                    type="password"
                    value={editingUser.password}
                    onChange={e =>
                      setEditingUser({ ...editingUser, password: e.target.value })
                    }
                  />
                  <button onClick={saveEdit}>Salvar</button>
                </div>
              ) : (
                <div className="user-info">
                  <div>
                    <strong>Nome:</strong> {user.name}
                  </div>
                  <div>
                    <strong>E-mail:</strong> {user.email}
                  </div>
                  <div>
                    <button onClick={() => startEditing(user)}>Editar</button>
                    <button onClick={() => deleteUser(user.id)}>Excluir</button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPanel;
