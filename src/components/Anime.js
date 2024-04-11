// Anime.js
import React, { useEffect, useState } from 'react';
import AnimeItem from './AnimeItem';
import axios from 'axios';
import Spinner from './Spinner';
const Anime = () => {
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const response = await axios.get('https://api.jikan.moe/v4/anime');
        setAnime(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching anime:', error);
        setLoading(false);
      }
    };
    fetchAnime();
  }, []);

  return (
    <div className='container'>
      <div className='row'>
      {loading ? (
        <div>{<Spinner/>}</div>
      ) : (
        anime.map((animeItem) => {
         return<div className='col-md-3'>
          <AnimeItem
            key={animeItem.mal_id}
            title={animeItem.title}
            image={animeItem.images.jpg.image_url}
            episodes={animeItem.episodes}
            rating={animeItem.score}
            synopsis={animeItem.synopsis}
          />
          </div>
        })
      )}
      </div>
    </div>
  );
};

export default Anime;
