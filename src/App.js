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
import ProtectedRoute from "./components/ProtectedRoute";

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
          element={
            <ProtectedRoute activeUser={activeUser} isPrivate={false}>
              <LoginPage setActiveUser={setActiveUser} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/search"
          element={
            <ProtectedRoute isPrivate={true} activeUser={activeUser}>
              <SearchPage
                activeUser={activeUser}
                favorites={favorites}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/favorites"
          element={
            <ProtectedRoute isPrivate={true} activeUser={activeUser}>
              <FavoritesPage
                activeUser={activeUser}
                favorites={favorites}
                removeFavorite={removeFavorite}
              />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
