import { Link } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';

function Register() {
  function onRegister({ name, email, password }: { name: string; email: string; password: string }) {
    console.log(name);
    console.log(email);
    console.log(password);
  }

  return (
    <div className="p-8">
      <p className="text-2xl font-medium">Register</p>
      <RegisterInput register={onRegister} />

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
