import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import AddForm from './AddForm';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-form" element={<AddForm />} />
        <Route path="/edit-form/:id" element={<AddForm />} />
      </Routes>
    </div>
  );
};

export default App;
