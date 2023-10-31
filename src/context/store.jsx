import React, { useReducer, createContext } from "react";
import Cookies from "js-cookie";

export const myContext = createContext(null);

// cookies.set
// cookies.get
// cookie.remove

const mytoken=Cookies.get("token")
if(mytoken){
  window.location.href="/"
}else{
  window.location.href="/login"
}















function reducer(isLogin,action) {
  //reducer logic here
  
  if(action.type==="loggedIn"){
    Cookies.set("token","yes")
   
  }else if(action.type==="loggedOut"){
    Cookies.remove('token')
  }
}
const Provider = ({ children }) => {
  const [isLogin, dispatch] = useReducer(reducer,false);

  return (
    <>
      <myContext.Provider value={{ isLogin, dispatch }}>
        
        {children}
      </myContext.Provider>
    </>
  );
};

export default Provider;
