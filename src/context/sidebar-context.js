import { createContext, useContext, useReducer } from 'react';

const SideBarContext = createContext();

const SideBarProvider = ({ children }) => {
  const initialState = {
    showSideBar: true,
  };

  const reducerFunc = (state, action) => {
    switch (action.type) {
      case 'TOGGLE_SIDEBAR':
        return { ...state, showSideBar: !state.showSideBar };
      default:
        return state;
    }
  };

  const [sideBarState, sideBarDispatch] = useReducer(reducerFunc, initialState);

  return (
    <SideBarContext.Provider value={{ sideBarState, sideBarDispatch }}>
      {children}
    </SideBarContext.Provider>
  );
};

const useSideBar = () => useContext(SideBarContext);

export { useSideBar, SideBarProvider };
