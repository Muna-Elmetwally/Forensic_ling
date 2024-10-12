import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Fetch users from the mock API on component mount
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
      const newUser = { email, password };

      // POST new user to the mock API
      await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      // Fetch updated user list
      const response = await fetch("http://localhost:5000/users");
      const updatedUsers = await response.json();
      setUsers(updatedUsers);

      setEmail("");
      setPassword("");
    }
  };

  const removeUser = async (id) => {
    // DELETE user from the mock API
    await fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    });
    setUsers(users.filter((user) => user.id !== id));
  };

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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="action-button remove"
                    onClick={() => removeUser(user.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
