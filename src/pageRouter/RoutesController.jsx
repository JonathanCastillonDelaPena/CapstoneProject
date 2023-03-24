import React from "react";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "react-auth-kit";

// Pages
import NotFoundWarningPage from "../pages/NotFoundWarningPage";
import HomePage from "../pages/HomePage";
import PageLogin from "../pages/PageLogin";
import PageSignup from "../pages/PageSignUp";
import Profile from "../pages/Profile";
import ChangeEmail from "../components/common/FormChangeEmail";

const RoutesController = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLogin />} />
      <Route
        path="/home"
        element={
          <RequireAuth loginPath={"/"}>
            <HomePage />
          </RequireAuth>
        }
      />
      <Route
        path="/profile"
        element={
          <RequireAuth loginPath={"/"}>
            <Profile />
          </RequireAuth>
        }
      />
      <Route
        path="/changeemail"
        element={
          <RequireAuth loginPath={"/"}>
            <ChangeEmail />
          </RequireAuth>
        }
      />
      <Route path="/register" element={<PageSignup />} />
      <Route path="*" element={<NotFoundWarningPage />} />
    </Routes>
  );
};

export default RoutesController;
