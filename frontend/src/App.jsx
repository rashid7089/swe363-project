import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './navbar';
import { useEffect } from 'react';

import AddProject from './router/addProject';
import Auth from './router/auth';
import Home from './router/home';
import ViewProject from './router/viewProject';
import UserProfile from './router/profile';

function App() {

  useEffect(() => {
    // if no local storage, create one
    if (!localStorage.getItem('token')) {
      localStorage.setItem('token', '');
    }
    if (!localStorage.getItem('userId')) {
      localStorage.setItem('userId', '');
    }
  }, [])
  
  return (
    <Routes>
      <Route path="/" element={<Navbar HideListItems={true} />}>
        <Route path="/" element={<Auth setSelectedPage={"login"} />} />
        <Route path="/login" element={<Auth setSelectedPage={"login"} />} />
        <Route path="/signup" element={<Auth setSelectedPage={"signup"} />} />
        <Route path="/forget-password" element={<Auth setSelectedPage={"forget-password"} />} />
      </Route>
      <Route path="/" element={<Navbar />}>
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-project" element={<AddProject />} />
        <Route path="/view-project/:id" element={<ViewProject />} />
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
