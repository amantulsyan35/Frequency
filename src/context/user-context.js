import { createContext, useContext, useReducer } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const userReducerFunc = (state, action) => {
    switch (action.type) {
      case 'EMAIL':
        return { ...state, email: action.payload };
      case 'PASSWORD':
        return {
          ...state,
          password: action.payload,
        };
      default:
        return state;
    }
  };

  const [userState, userDispatch] = useReducer(userReducerFunc, {
    email: '',
    password: '',
  });

  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
