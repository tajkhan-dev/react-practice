import React, { useState, createContext } from "react";

export const myContext = createContext(null);

const Provider = ({ children }) => {
  const [data, setData] = useState([]);




  return (
    <>
      <myContext.Provider value={{data,setData}}>
        {children}
        </myContext.Provider>
    </>
  );
};

export default Provider;
