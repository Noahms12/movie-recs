import React, { useState } from 'react';

function App() {
  const [title, setTitle] = useState("");
  const [movies, setMovies] = useState([]);

  const fetchRecommendations = async () => {
    const res = await fetch(`http://127.0.0.1:8000/recommend?title=${encodeURIComponent(title)}`);
    const data = await res.json();
    setMovies(data.results || []);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🎬 Movie Recommender</h1>

      <input
        type="text"
        value={title}
        placeholder="Enter a movie title"
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: "0.5rem", width: "300px" }}
      />
      <button onClick={fetchRecommendations} style={{ marginLeft: "1rem" }}>
        Recommend
      </button>

      <ul>
        {movies.map((movie, i) => (
          <li key={i}>
            <strong>{movie[0]}</strong> – {movie[1]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
