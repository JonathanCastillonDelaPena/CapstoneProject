import React from "react";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from 'react-auth-kit'

// Pages
import NotFoundWarningPage from "../pages/NotFoundWarningPage";
import HomePage from "../pages/HomePage";
import PageLogin from "../pages/PageLogin";
import PageSignup from "../pages/PageSignUp";

const RoutesController = () => {
  return (
    <Routes>
      <Route index element={<PageLogin />} />
      <Route path="*" element={<NotFoundWarningPage />} />
      <Route path="/login" element={<PageLogin />} />
      <Route path="/home" element={
        <RequireAuth loginPath={'/login'}>
          <HomePage />
        </RequireAuth>
      } />
      <Route path="/register" element={<PageSignup />} />
    </Routes>
  );
};

export default RoutesController;
