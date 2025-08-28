import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="p-8">
      <p className="text-2xl font-medium">Login</p>
      <form className="mt-3 flex flex-col gap-2">
        <input type="email" placeholder="email" className="rounded-lg border-1 p-2" />
        <input type="password" placeholder="password" className="rounded-lg border-1 p-2" />
        <button className="cursor-pointer rounded-lg bg-blue-950 p-2 text-white" type="submit">
          Login
        </button>
      </form>

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
