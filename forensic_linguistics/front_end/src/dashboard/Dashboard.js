import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState({ role: "admin" }); // Mock current user

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("http://localhost:5000/users");
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const addUser = async () => {
    if (email && password) {
      const newUser = { email, password, role: "user" }; // Regular user role

      await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      setUsers([...users, newUser]);
      setEmail("");
      setPassword("");
    }
  };

  const removeUser = async (id) => {
    await fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    });
    setUsers(users.filter((user) => user.id !== id));
  };

  const updateEmail = async (id, newEmail) => {
    const updatedUser = {
      ...users.find((user) => user.id === id),
      email: newEmail,
    };

    await fetch(`http://localhost:5000/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    });

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const isAdmin = currentUser.role === "admin";

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Admin Dashboard</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
      <div className="content">
        <div className="top-bar">
          <h1>User Management</h1>
          <Link to="/">
            <button>Go to Home</button>
          </Link>
        </div>
        <div className="user-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={addUser}>Add User</button>
        </div>
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              {isAdmin && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  <input
                    type="email"
                    value={user.email}
                    onChange={(e) => updateEmail(user.id, e.target.value)}
                    disabled={!isAdmin} // Disable if not admin
                  />
                </td>
                {isAdmin && (
                  <td>
                    <button
                      className="action-button remove"
                      onClick={() => removeUser(user.id)}
                    >
                      Remove
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
