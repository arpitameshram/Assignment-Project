import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IPOListPage from './components/IPOListPage';
import IPODetailsPage from './components/IPODetailsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<IPODetailsPage />} />
          <Route path="/list" element={<IPOListPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
