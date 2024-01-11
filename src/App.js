import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Home from './components/home';
import Navbar from './components/navbar';
import Register from './components/register';
import Admin from './components/admin';
import './App.css';
import ServiceDetails from './components/serviceDetails';
import AddServices from './components/AddServices';
import AddCategories from './components/AddCategories';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={< Home />} />
            <Route path="/register" element={< Register />} />
            <Route path="/login" element={< Login />} />
            <Route path="/admin" element={< Admin />} />
            <Route path="/categories" element={< AddCategories />} />
            <Route path="/addServices" element={< AddServices />} />
            <Route path="/services/:id" element={< ServiceDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
