import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './navbar';

import AddProject from './router/addProject';
import Auth from './router/auth';
import Home from './router/home';
import ViewProject from './router/viewProject';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar HideListItems={true} />}>
        <Route path="/" element={<Auth setSelectedPage={"signup"} />} />
        <Route path="/login" element={<Auth setSelectedPage={"login"} />} />
        <Route path="/signup" element={<Auth setSelectedPage={"signup"} />} />
        <Route path="/forget-password" element={<Auth setSelectedPage={"forget-password"} />} />
      </Route>
      <Route path="/" element={<Navbar />}>
        <Route path="/home" element={<Home />} />
        <Route path="/add-project" element={<AddProject />} />
        <Route path="/view-project/:id" element={<ViewProject />} />
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
