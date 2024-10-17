import React, { useState } from "react";
import "./SearchBar.css";
import NavMenu from "../../pages/MENU/NavMenu";
import { Link } from "react-router-dom";

export default function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    // Fetch data from the mock API
    const response = await fetch(`http://localhost:5000/search?q=${query}`);
    const data = await response.json();

    setResults(data);
  };

  return (
    <div className="search-bar-container">
      <div>
        <Link to="/NavMenu">
          <NavMenu />
        </Link>
      </div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="search-results">
        {results.map((result, index) => (
          <div key={index} className="result-item">
            <p>{result.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
