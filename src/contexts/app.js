import React, { useState } from "react";
import useFilter from "../hooks/useFilter";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [view, setView] = useState("list"); // list
  const { search, setSearch, limit, setLimit, order, setOrder } = useFilter();
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadedMoreRows, setLoadedMoreRows] = useState(0);

  const dataset = {
    controls: {
      view, setView,
      currentPage, setCurrentPage,
      search, setSearch,
      limit, setLimit,
      order, setOrder,
      isLoading, setIsLoading,
      loadedMoreRows, setLoadedMoreRows
    },
    favorites: {
      data: favorites,
      setFavorites
    }
  };

  return (
    <AppContext.Provider value={dataset}>
      {children}
    </AppContext.Provider>
  );
};
