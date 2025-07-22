import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Result from './pages/Result';
import BuyCredit from './pages/BuyCredit';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-orange-100 via-rose-100 to-indigo-100 text-gray-800">
        <Navbar />
        <ToastContainer position="bottom-right" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/buy" element={<BuyCredit />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}


export default App;
