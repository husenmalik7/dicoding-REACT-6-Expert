import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { asyncSetAuthUser } from '../states/authUser/action';

import LoginInput from '../components/LoginInput';

import type { AppDispatch } from '../states';

function Login() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  function onLogin({ email, password }: { email: string; password: string }) {
    dispatch(asyncSetAuthUser({ email, password }));
    navigate('/');
  }

  return (
    <div className="p-8">
      <p className="text-2xl font-medium">Login</p>
      <LoginInput login={onLogin} />

      <div className="mt-3 flex gap-x-1">
        Belum punya akun?
        <Link to="/register" className="font-medium text-blue-600 visited:text-purple-600">
          <p>Daftar di sini</p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
