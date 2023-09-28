import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './homepage';

export const RoutesComponent = () => (
  <React.Suspense fallback={<div>loading...</div>}>
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  </React.Suspense>
);
