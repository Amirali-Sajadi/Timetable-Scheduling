import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import GeneratePage from "./pages/GeneratePage";
import EditPage from "./pages/EditPage";
import SolutionPage from "./pages/SolutionPage";

import Layout from "./components/Layout/Layout";

// A small component that checks for an auth token.
// If none, it redirects to "/login". If present, it renders the children.
function ProtectedRoute({ children }) {
  const token = localStorage.getItem("authToken");
  return token ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public routes (no token needed) */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected routes: wrap each one with ProtectedRoute */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout>
                <MainPage />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/generate"
          element={
            <ProtectedRoute>
              <Layout>
                <GeneratePage />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit"
          element={
            <ProtectedRoute>
              <Layout>
                <EditPage />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/solution"
          element={
            <ProtectedRoute>
              <Layout>
                <SolutionPage />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Any unknown path → redirect to "/" (protected) */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
