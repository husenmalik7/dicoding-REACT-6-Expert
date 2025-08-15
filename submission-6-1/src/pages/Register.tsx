import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  return (
    <div>
      <p>Register</p>
      <div onClick={() => navigate('/login')}>
        <p>login</p>
      </div>
    </div>
  );
}

export default Register;
