import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-100">
      <Header />

      <main className="max-w-3xl m-auto min-h-screen bg-white py-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
