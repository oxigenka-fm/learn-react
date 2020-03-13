import { useContext } from "react";
import { AppContext } from "../contexts/app";

const useApp = () => useContext(AppContext);

export default useApp;
