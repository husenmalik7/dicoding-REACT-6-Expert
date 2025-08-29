import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';

function Login() {
  function onLogin({ email, password }: { email: string; password: string }) {
    console.log(email, password);
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
