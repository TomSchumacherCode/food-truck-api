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
import FavoritesPage from "./components/FavoritesPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route
          path="/login"
          element={
            <ProtectedRoute isPrivate={false}>
              <LoginPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/search"
          element={
            <ProtectedRoute isPrivate={true}>
              <SearchPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/favorites"
          element={
            <ProtectedRoute isPrivate={true}>
              <FavoritesPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
