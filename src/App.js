import React, { useState, useEffect } from 'react';
import MainLayout from './layout/MainLayout';
import GridControls from './components/GridControls';
import Posts from './components/Posts';
import LoadMore from './components/LoadMore';
import Pagination from './components/Pagination';
import { useFetch } from './hooks/fetch';

export default function App() {
  // const [posts, setPosts] = useState([]);
  const [view, setView] = useState('grid');
  const [search, setSearch] = useState('');
  const [order, setOrder] = useState("asc"); // desc
  const [limit, setLimit] = useState(6); // 12,24
  const [totalPages, setTotalPages] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);

  const {posts, error, isLoading } = useFetch({currentPage, limit, order, view});

  return (
    <MainLayout>
      <GridControls
        view={view}
        search={search}
        order={order}
        limit={limit}
        setView={setView}
        setSearch={setSearch}
        setOrder={setOrder}
        setLimit={setLimit}
      />
      <Posts posts={posts} />
      <LoadMore />
      <Pagination />
    </MainLayout  >
  );
}
