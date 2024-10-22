import { useEffect, useState } from "react";
import Post from "../post/Post";
import "./posts.css";
import axios from "axios";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post
          key={post.id}
          img={post.img}
          title={post.title}
          description={post.description}
        />
      ))}
    </div>
  );
}
