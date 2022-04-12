import axios from 'axios';

const signUpUser = async (user) => {
  try {
    const response = await axios.post('/api/auth/signup', user);
    return response && response;
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (email, password) => {
  try {
    const response = await axios.post('/api/auth/login', {
      email,
      password,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export { signUpUser, loginUser };
