import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css";
import Cookies from "js-cookie";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Fetch users from the mock API on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/admins");
        setUsers(response.data);

        // Check if the current user exists
        const loggedInEmail = Cookies.get("userEmail");
        const userExists = response.data.some(
          (user) => user.email === loggedInEmail
        );

        if (userExists) {
          setIsAuthenticated(true);
        } else {
          alert("Access denied. You are not authorized to view this page.");
          setTimeout(() => {
            navigate("/"); // Redirect to login or another page after showing the error
          }, 3000); // Redirect after 3 seconds
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, [navigate]);
  //adding user
  const addUser = async () => {
    if (email && password) {
      // Fetch the list of regular users
      const response = await fetch("http://localhost:5000/users"); // Adjust the URL if necessary
      const regularUsers = await response.json();

      // Check if the user exists in regular users
      const userExists = regularUsers.some((user) => user.email === email);

      if (!userExists) {
        alert(
          "The user you are trying to make an admin is not found in regular users."
        );
        return; // Exit the function if the user is not found
      }

      const newUser = { email, password };

      // POST new admin user to the mock API
      await fetch("http://localhost:5000/admins", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      // Fetch updated user list
      const updatedResponse = await fetch("http://localhost:5000/admins");
      const updatedUsers = await updatedResponse.json();
      setUsers(updatedUsers);

      // Clear input fields
      setEmail("");
      setPassword("");
    } else {
      alert("Please fill in both fields.");
    }
  };
  const removeUser = async (id) => {
    // DELETE user from the mock API
    await fetch(`http://localhost:5000/admins/${id}`, {
      method: "DELETE",
    });
    setUsers(users.filter((user) => user.id !== id));
  };

  if (!isAuthenticated) {
    return <p className="error-message">Redirecting...</p>; // Show loading or redirecting message
  }
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
