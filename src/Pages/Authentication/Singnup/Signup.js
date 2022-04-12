import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FormInput, FormButton } from '../../../components';
import { toast } from 'react-toastify';
import { signUpUser } from '../../../services/user-service';
import './Signup.css';

const Signup = () => {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignup = async (e) => {
    try {
      e.preventDefault();
      const signedUser = await signUpUser(user);

      localStorage.setItem(
        'encodedToken',
        JSON.stringify(signedUser.data.encodedToken)
      );

      toast.success(
        `🦄 Welcome to Frequency ${signedUser.data.createdUser.firstName} `
      );
      navigate('/');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleCheck = () => {
    setChecked((state) => !state);
  };

  return (
    <div className='signup-container'>
      <div className='signup-form'>
        <div className='signup-heading'>
          <h4>Signup</h4>
        </div>
        <form className='form'>
          <FormInput
            label='FIRST-NAME'
            type='text'
            placeholder='Enter your First Name'
            className='form-group'
            onChange={handleChange}
            name='firstName'
          />
          <FormInput
            label='LAST-NAME'
            type='text'
            placeholder='Enter your Last Name'
            className='form-group'
            onChange={handleChange}
            name='lastName'
          />
          <FormInput
            label='EMAIL'
            type='email'
            placeholder='Enter your email'
            className='form-group'
            onChange={handleChange}
            name='email'
          />
          <FormInput
            label='PASSWORD'
            type='password'
            placeholder='Enter your password'
            className='form-group'
            onChange={handleChange}
            name='password'
          />

          <div className='form-desc'>
            <FormInput
              label='I accept all Terms & Conditions'
              type='checkbox'
              className='form-remember'
              onChange={handleCheck}
            />
          </div>
          <FormButton
            label='Create New Account'
            onClick={handleSignup}
            disabledAttr={checked ? false : true}
          />
          <div className='form-footer'>
            <Link to='/login'>Already have an account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
