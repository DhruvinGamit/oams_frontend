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
import Introduction from './components/introduction';
import AppointmentForm from './components/AppointmentForm';
import RequestedServices from './components/RequestedServices';
import ServiceAppointments from './components/ServiceAppointments';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Introduction  />} />
            <Route path="/home" element={< Home />} />
            <Route path="/register" element={< Register />} />
            <Route path="/login" element={< Login />} />
            <Route path="/admin" element={< Admin />} />
            <Route path="/categories" element={< AddCategories />} />
            <Route path="/addServices" element={< AddServices />} />
            <Route path="/services/:id" element={< ServiceDetails />} />
            <Route path="/appoint/:id" element={<AppointmentForm />} />
            <Route path="/requested-services" element={<RequestedServices />} />
            <Route path="/service-appointments" element={<ServiceAppointments />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
