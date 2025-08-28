import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="p-8">
      <p className="text-2xl font-medium">Register</p>
      <form className="mt-3 flex flex-col gap-2">
        <input type="text" placeholder="name" className="rounded-lg border-1 p-2" />
        <input type="email" placeholder="email" className="rounded-lg border-1 p-2" />
        <input type="password" placeholder="password" className="rounded-lg border-1 p-2" />
        <button className="cursor-pointer rounded-lg bg-blue-950 p-2 text-white" type="submit">
          Register
        </button>
      </form>

      <div className="mt-3 flex gap-x-1">
        Sudah punya akun?
        <Link to="/login" className="font-medium text-blue-600 visited:text-purple-600">
          <p>Login di sini</p>
        </Link>
      </div>
    </div>
  );
}

export default Register;
