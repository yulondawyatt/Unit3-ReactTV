import "./shows.css";
import { useState } from 'react';
import EpisodeList from './episodes/EpisodeList.jsx';
import EpisodeDetails from './episodes/EpisodeDetails.jsx';





/** Allows users to browse through the episodes of the given show */
const ShowDetails = ({show}) => {

  //const [episode] = useState(tvShows);
  const [selectedEpisode, setSelectedEpisode] = useState(EpisodeList);

  if (!selectedEpisode) {
    return (
      <section>
        <h2>Episode Details</h2>
        <p>Select an episode to learn more.</p>
      </section>
    );

  }
  
  return (
    <div className="show-details">
              <ul>
              <li>Galactic Odyssey |</li>
              <li>Urban Legends |</li>
              <li>Culinary Journeys |</li>
              <li>Code Breakers |</li>
              <li>Pixel Wars</li>
            </ul>
            </div>


  );
  
  
}

  export default ShowDetails;