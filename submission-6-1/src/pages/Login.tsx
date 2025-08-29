import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';
import { useDispatch } from 'react-redux';

import type { AppDispatch } from '../states';

function Login() {
  const dispatch = useDispatch<AppDispatch>();

  function onLogin({ email, password }: { email: string; password: string }) {
    dispatch(asyncSetAuthUser({ email, password }));
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
