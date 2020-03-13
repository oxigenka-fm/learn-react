import React from "react";
import MainLayout from "./layout/MainLayout";
import Filter from "./components/Filter";
import Posts from "./components/Posts";
import LoadMore from "./components/LoadMore";
import Pagination from "./components/Pagination";
// import usePosts from "./hooks/usePosts";
import useApp from "./hooks/useApp";
import { AppProvider } from "./contexts/app";

export default function App() {

  return (
    <AppProvider>
      <MainLayout>
        <Filter />
        <Posts />
        <LoadMore />
        <Pagination />
      </MainLayout>
    </AppProvider>
  );
}
