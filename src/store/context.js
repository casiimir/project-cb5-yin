import { createContext } from "react";
import initialValue from "./state";

const AppContext = createContext(initialValue);

export default AppContext;
