import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  write: true,
};

const asPerScreen = window.screen.width < 900 ? false : true;

export const ContextProvider = ({ children }) => {
  const [sidenavOpen, setSidenavOpen] = useState(asPerScreen);
  const [isClicked, setIsClicked] = useState(initialState.write);

  return (
    <>
      <StateContext.Provider value={{ sidenavOpen, setSidenavOpen, isClicked, setIsClicked }}>
        {children}
      </StateContext.Provider>
    </>
  );
};

export const useStateContext = () => useContext(StateContext);
