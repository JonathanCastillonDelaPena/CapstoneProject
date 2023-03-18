import React from "react";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "react-auth-kit";

// Pages
import NotFoundWarningPage from "../pages/NotFoundWarningPage";
import HomePage from "../pages/HomePage";
import PageLogin from "../pages/PageLogin";
import PageSignup from "../pages/PageSignUp";
import Profile from "../pages/Profile";

const RoutesController = () => {
  return (
    <Routes>
      <Route index element={<PageLogin />} />
      <Route path="*" element={<NotFoundWarningPage />} />
      <Route path="/login" element={<PageLogin />} />
      <Route path="/home"
        element={
          <RequireAuth loginPath={"/login"}>
            <HomePage />
          </RequireAuth>
        }
      />
      <Route path="/register" element={<PageSignup />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default RoutesController;
