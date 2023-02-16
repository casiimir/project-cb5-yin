import "@/styles/globals.scss";
import {  useReducer, useEffect } from "react";
import AppContext from "@/store/context";
import { reducer } from "@/store/reducers";
import initialValue from "@/store/state";
import { getAuthFromLS } from "@/utils/utils";
import { cases } from "@/store/reducers";

export default function App({ Component, pageProps }) {
const [state, dispatch] = useReducer(reducer, initialValue);

useEffect(() => {
  const auth = getAuthFromLS()
  dispatch({type: cases.SET_AUTH , payload: auth }) 
  
},[])
  return(
    <AppContext.Provider value={{state, dispatch}}>
    <Component {...pageProps} />
    </AppContext.Provider>
  )
}
