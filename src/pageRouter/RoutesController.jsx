import React from "react";
import { Route, Routes } from "react-router-dom";

// Pages
import NotFoundWarningPage from "../pages/NotFoundWarningPage";
import HomePage from "../pages/HomePage";
import PageLogin from "../pages/PageLogin";
import SettingUpAcc from "../pages/SettingUpAcc";

const RoutesController = () => {
  return (
    <Routes>
      <Route index element={<SettingUpAcc/>} />
      <Route path="*" element={<NotFoundWarningPage />} />
      <Route path="/login" element={<PageLogin />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/setting" element={<SettingUpAcc />} />
    </Routes>
  );
};

export default RoutesController;
