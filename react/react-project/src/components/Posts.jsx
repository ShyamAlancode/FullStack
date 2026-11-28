import { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ margin: "20px", fontFamily: "sans-serif" }}>
      <h2>Posts Feed</h2>

      {loading ? (
        <p>Loading posts...</p>
      ) : (
        <table border={1} cellPadding={8} style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr bgcolor="#e0e0e0">
              <th style={{ width: "50px" }}>ID</th>
              <th>Title</th>
              <th>Content</th>
              <th style={{ width: "80px" }}>Author ID</th>
              <th style={{ width: "70px" }}>Likes</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td align="center">{post.id}</td>
                <td><strong>{post.title}</strong></td>
                <td>{post.body}</td>
                <td align="center">{post.userId}</td>
                <td align="center">{post.reactions?.likes ?? post.reactions ?? 0}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Posts;
