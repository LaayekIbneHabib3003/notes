import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  activeItem: false,
};

const asPerScreen = window.screen.width < 900 ? false : true;

export const ContextProvider = ({ children }) => {
  const [sidenavOpen, setSidenavOpen] = useState(asPerScreen);
  const [isClicked, setIsClicked] = useState(initialState);

  return (
    <>
      <StateContext.Provider value={{ sidenavOpen, setSidenavOpen, isClicked, setIsClicked }}>
        {children}
      </StateContext.Provider>
    </>
  );
};

export const useStateContext = () => useContext(StateContext);
