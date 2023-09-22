import './App.css';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import HomePage from "./components/HomePage";
import Signup from './components/Signup';
import Login from './components/Login';
import Product from './components/Product';
import Header from './components/Header';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Header />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}>
      </Route>
      <Route path="/Login" element={<Login />}>
      </Route>
      <Route path="/Signup" element={<Signup />}>
      </Route>
      <Route path="/Products" element={<Product />}>
      </Route>
    </Routes>
  </BrowserRouter>
  <Footer />
  </div>
  );
}

export default App;
