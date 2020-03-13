import React from "react";
import MainLayout from "./layout/MainLayout";
import Filter from "./components/Filter";
import Posts from "./components/Posts";
import LoadMore from "./components/LoadMore";
import Pagination from "./components/Pagination";
import usePosts from "./hooks/usePosts";
import useApp from "./hooks/useApp";
import { AppProvider } from "./contexts/app";

export default function App() {
  console.log("Start App");

  const { controls } = useApp();

  console.log("controls:", controls);

  const params = [];

  params.push(`_limit=${controls.limit}`);

  if (controls.currentPage >= 1) {
    params.push(`_page=${controls.currentPage}`);
  }

  if (controls.search) {
    params.push(`q=${controls.search}`);
  }
  const [{ isLoading, data, error }] = usePosts(params);

  return (
    <AppProvider value={controls}>
      <MainLayout>
        <Filter isLoading={isLoading} />
        <Posts posts={data} error={error} />
        <LoadMore isLoading={isLoading} />
        <Pagination />
      </MainLayout>
    </AppProvider>
  );
}
