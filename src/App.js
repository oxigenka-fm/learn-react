import React from 'react';
import Navigation from './Navigation';
import GridControls from './GridControls';
import GridContent from './GridContent';
import LoadMore from './LoadMore';
import Pagination from './Pagination';

export default function App() {
  return (
    <>
      <Navigation/>

      <div class="uk-section">
        <div class="uk-container">
          <GridControls/>

          <GridContent/>

          <LoadMore/>

          <Pagination/>
        </div>
      </div>
    </>
  );
}
