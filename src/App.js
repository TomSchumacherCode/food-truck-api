import React, { useCallback, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";
import Menu from "./components/Menu";
import SearchPage from "./components/SearchPage";
// import ProtectedRoute from "./components/ProtectedRoute";
import FavoritesPage from "./components/FavoritesPage";

function App() {
  const [activeUser, setActiveUser] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const addFavorite = useCallback((gif) => {
    setFavorites((curr) => [...curr, gif]);
  }, []);

  const removeFavorite = useCallback((id) => {
    setFavorites((curr) => curr.filter((val) => val.id !== id));
  }, []);

  return (
    <Router>
      <Menu activeUser={activeUser} />
      <Routes>
        <Route
          path="/login"
          element={<LoginPage setActiveUser={setActiveUser} />}
        />
        <Route
          path="/search"
          element={
            <SearchPage
              activeUser={activeUser}
              favorites={favorites}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <FavoritesPage
              activeUser={activeUser}
              favorites={favorites}
              removeFavorite={removeFavorite}
            />
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
