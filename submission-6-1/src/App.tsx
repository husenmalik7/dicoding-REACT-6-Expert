import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Leaderboards from './pages/Leaderboards';
import ThreadDetail from './pages/ThreadDetail';

import Header from './components/Header';
import Footer from './components/Footer';

import type { RootState } from './states';

function App() {
  const { authUser } = useSelector((state: RootState) => state);

  console.log(authUser);

  return (
    <div className="bg-gray-100">
      <Header />

      <main className="m-auto min-h-screen max-w-3xl bg-white py-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/leaderboards" element={<Leaderboards />} />
          <Route path="/threads/:id" element={<ThreadDetail />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
