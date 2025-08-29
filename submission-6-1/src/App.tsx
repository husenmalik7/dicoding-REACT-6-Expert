import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Leaderboards from './pages/Leaderboards';
import ThreadDetail from './pages/ThreadDetail';

import Header from './components/Header';
import Footer from './components/Footer';

import type { AppDispatch, RootState } from './states';
import { asyncUnsetAuthUser } from './states/authUser/action';

function App() {
  const authUser = useSelector((state: RootState) => state.authUser);
  const dispatch = useDispatch<AppDispatch>();

  console.log(authUser);

  function onLogout() {
    dispatch(asyncUnsetAuthUser());
  }

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

      <Footer authUser={authUser} logout={onLogout} />
    </div>
  );
}

export default App;
