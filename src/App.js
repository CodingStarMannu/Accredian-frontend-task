import React from 'react';
import "./App.css";
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';  

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<SignUp/>} />
      <Route path="/signin" element={<SignIn/>} />
      </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
