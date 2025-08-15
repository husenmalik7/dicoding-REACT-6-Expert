import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  return (
    <div>
      <p>Login</p>
      <div onClick={() => navigate('/register')}>
        <p>register</p>
      </div>
    </div>
  );
}

export default Login;
