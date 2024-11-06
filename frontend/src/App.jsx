import { Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './navbar'

// pages
import AddProject from './router/addProject'
import Auth from './router/auth'
import Home from './router/home'
import ViewProject from './router/viewProject'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/add-project" element={<AddProject />} />
        <Route path="/view-project/:id" element={<ViewProject />} />
      </Route>
      <Route path="/auth" element={<Auth />} />
    </Routes>
  )
}

export default App
