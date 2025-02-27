import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import CreateOrder from './components/CreateOrder';
import OrderList from './components/OrderList';
import Charts from './components/Charts';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-order" element={<CreateOrder />} />
        <Route path="/orders" element={<OrderList />} />
        <Route path="/charts" element={<Charts />} />
      </Routes>
    </Router>
  );
}



export default App;