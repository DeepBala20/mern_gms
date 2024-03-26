
import React, { createContext, useContext, useState } from 'react';

// Create a context
const GlobalContext = createContext();

// Create a provider component
export const GlobalProvider = ({ children }) => {
  const [globalVariable, setGlobalVariable] = useState('initialValue');

  return (
    <GlobalContext.Provider value={{ globalVariable, setGlobalVariable }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to consume the context
export const useGlobal = () => useContext(GlobalContext);
