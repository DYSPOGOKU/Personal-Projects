
import React, { useEffect, useState } from 'react';
import MangaItem from './MangaItem';
import axios from 'axios';
import Spinner from './Spinner';
const Manga = () => {
  const [manga, setmanga] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchmanga = async () => {
      try {
        const response = await axios.get('https://api.jikan.moe/v4/manga');
        setmanga(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching manga:', error);
        setLoading(false);
      }
    };
    fetchmanga();
  }, []);

  return (
    <div className='container'>
      <div className='row'>
      {loading ? (
        <div>{<Spinner/>}</div>
      ) : (
        manga.map((mangaItem) => {
         return<div className='col-md-3'>
          <MangaItem
            key={mangaItem.mal_id}
            title={mangaItem.title}
            image={mangaItem.images.jpg.image_url}
            chapters={mangaItem.chapters}
            rating={mangaItem.score}
            synopsis={mangaItem.synopsis}
          />
          </div>
        })
      )}
      </div>
    </div>
  );
};

export default Manga;
