import { useContext } from "react";
import PocketContext from "../context/PocketContext";

// A custom hook to access the state and functions provided by the PocketContext
const usePocketContext = () => {
  // Use the useContext hook to retrieve the context value provided by PocketContext
  return useContext(PocketContext);
}

export default usePocketContext;