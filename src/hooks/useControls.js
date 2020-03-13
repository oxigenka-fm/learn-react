import { useContext } from "react";
import { AppContext } from "../contexts/app";

const useApp = () => {
  console.log('useControls');

  return useContext(AppContext);
};

export default useApp;
