import { useContext } from "react";
import { AppContext } from "../contexts/app";

const useApp = () => {
  console.log('useApp, context:', AppContext);

  return useContext(AppContext);
};

export default useApp;
