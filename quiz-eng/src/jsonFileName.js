import React, { createContext, useState, useContext } from "react";

const JsonFileNameContext = createContext();

export const useJsonFileName = () => {
  return useContext(JsonFileNameContext);
};

export const JsonFileNameProvider = ({ children }) => {
  const [jsonFileName, setJsonFileName] = useState(null);

  return (
    <JsonFileNameContext.Provider value={{ jsonFileName, setJsonFileName }}>
      {children}
    </JsonFileNameContext.Provider>
  );
};
