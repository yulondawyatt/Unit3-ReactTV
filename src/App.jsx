import { useState } from 'react';
import ShowDetails from './shows/ShowDetails.jsx';
import EpisodeList from './shows/EpisodeList.jsx';
/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */


const App = () => {
  return (
    <>
      <header>
        <p>React TV</p><br />
        
      </header>
       
      <main>
        <ShowDetails />

      </main>
    </>
  );
}

  export default App;