import React, { useState, useEffect } from "react";
import "./css/App.css";
import axios from "axios";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Homepage from "./pages/Home.jsx";
import Detail from "./pages/Details.jsx";
import Favorites from "./pages/Favorites.jsx";

function App() {
  const [isLoading, setisLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=b2f0ee9217d829b7deaa3ba29a6f813c&language=en-US&page=1"
      )
      .then((data) => {
        setPosts(data.data.results);
      })

      .finally(() => {
        setisLoading(false);
      });
  }, []);

  return (
    <BrowserRouter>
      <div id="movies">
        <Navbar />

        <div className="loading">
          {isLoading ? (
            <p>Loading....</p>
          ) : (
            <Routes>
              <Route path="/" element={<Homepage posts={posts} />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
