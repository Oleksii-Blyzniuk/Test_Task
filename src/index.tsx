import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HomePage } from './components/HomePage';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { MoreInfoDetailsPage } from './components/MoreInfoDetailsPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />

        <Route
          path="/article/:articleId"
          element={<MoreInfoDetailsPage />}
        />

      </Route>
    </Routes>
  </Router>
);
