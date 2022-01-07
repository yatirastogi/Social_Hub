import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  username:""

};

const Store=({children})=>{
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  
  return (
    <AuthContext.Provider
      value={[state,dispatch]}>
      {children}
    </AuthContext.Provider>
  )
}




export const AuthContext = createContext(INITIAL_STATE);
export default Store;