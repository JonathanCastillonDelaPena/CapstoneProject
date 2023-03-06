import React from "react";
import { Route, Routes } from "react-router-dom";

// Pages
import NotFoundWarningPage from "../pages/NotFoundWarningPage";
import HomePage from "../pages/HomePage";

const RoutesController = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="*" element={<NotFoundWarningPage />} />

      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};

export default RoutesController;
