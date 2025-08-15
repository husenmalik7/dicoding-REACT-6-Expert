import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Leaderboards from './pages/Leaderboards';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-100">
      <Header />

      <main className="m-auto min-h-screen max-w-3xl bg-white py-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/leaderboards" element={<Leaderboards />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
