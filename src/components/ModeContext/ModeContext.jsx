import React, { createContext, useContext, useState, useEffect } from 'react';

export const ModeContext = createContext();

export const useMode = () => useContext(ModeContext);

const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState('light'); // Example state

  // Example effect
  useEffect(() => {
    // Logic to handle side effects when mode changes
  }, [mode]);

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeProvider;