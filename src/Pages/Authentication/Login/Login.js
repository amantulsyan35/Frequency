import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { FormInput, FormButton } from '../../../components';
import { toast } from 'react-toastify';
import { useUser } from '../../../context/user-context';
import { loginUser } from '../../../services/user-service';

const Login = () => {
  const { userState, userDispatch } = useUser();
  let navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked((state) => !state);
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const loggedInUser = await loginUser(userState.email, userState.password);
      localStorage.setItem('encodedToken', loggedInUser.data.encodedToken);
      toast.success(
        `🦄 Welcome to Frequency ${loggedInUser.data.foundUser.firstName} `
      );
      navigate('/');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className='login-container'>
      <div className='login-form'>
        <div className='login-heading'>
          <h4>Login</h4>
        </div>
        <form className='form'>
          <FormInput
            label='EMAIL'
            type='email'
            placeholder='Enter your email'
            name='email'
            className='form-group'
            onChange={(e) =>
              userDispatch({ type: 'EMAIL', payload: e.target.value })
            }
          />
          <FormInput
            label='PASSWORD'
            type='password'
            placeholder='Enter your password'
            name='password'
            className='form-group'
            onChange={(e) =>
              userDispatch({ type: 'PASSWORD', payload: e.target.value })
            }
          />
          <div className='form-desc'>
            <FormInput
              label='Remember me'
              type='checkbox'
              className='form-remember'
              onChange={handleCheck}
            />

            <Link to='#'>Forgot your Password?</Link>
          </div>
          <FormButton label='Log In' onClick={handleLogin} />
          <div className='form-footer'>
            <Link to='/signup'>Create New Account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
