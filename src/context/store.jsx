import React, {createContext,useState } from "react";

export const myContext = createContext(null);

const Provider = ({ children }) => {
  const [email,setEmail]=useState("")
  const [userName,setUserName]=useState("")
  const [users,setUsers]=useState([])
 

  return (
    <>
      <myContext.Provider value={{email,setEmail,userName,setUserName,users,setUsers}}>{children}</myContext.Provider>
    </>
  );
};

export default Provider;
