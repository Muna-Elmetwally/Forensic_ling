import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import NavMenu from "../../pages/MENU/NavMenu";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]); // Start with an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch posts from the API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:5000/posts");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Filter posts based on the query
  useEffect(() => {
    if (query) {
      const lowerCaseQuery = query.toLowerCase();
      const filtered = posts.filter((post) =>
        post.title.toLowerCase().includes(lowerCaseQuery)
      );
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts([]); // Set to empty if no query
    }
  }, [query, posts]); // Rerun filtering whenever query or posts change

  if (loading) {
    return <div>Loading posts...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="search-posts-container">
      <div>
        <Link to="/NavMenu">
          <NavMenu />
        </Link>
      </div>
      <div className="search-bar-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder="Search posts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search posts"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </div>
      <div className="search-results">
        {filteredPosts.length === 0 && query === "" ? (
          <p></p>
        ) : (
          <div className="results-container">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="result-item"
                onClick={(e) => handleScroll(e, "posts")} // Call handleScroll on click
              >
                <h3 className="result-title">{post.title}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
