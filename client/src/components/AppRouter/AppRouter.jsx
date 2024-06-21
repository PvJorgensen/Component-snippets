import React from 'react';
import {Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from '../../Pages/LandingPage/LoginPage';
import { IndexPage } from '../../Pages/TestComponent/IndexPage';

export const AppRouter = () => {
  return (
      <Routes>
        <Route path="login" index element={<LandingPage />} />
        <Route path="index" element={<IndexPage />} />
      </Routes>
  );
};
