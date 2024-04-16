import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import loadingGif from './loading.gif';
const GenreDetails = () => {
  const { genre } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMorePages, setHasMorePages] = useState(true);
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    setAnimeList([]);
    const fetchAnime = async () => {
      setAnimeList([])
      let hasMore = true;
      let page = 1;

      while (hasMore) {
        try {
          const response = await axios.get(`https://api.jikan.moe/v4/anime?page=${page}`);
          const newAnimeByGenre = response.data.data.filter(anime =>
            anime.genres.some(g => g.name === genre)
          );
          setAnimeList(prevAnimeList => [...prevAnimeList, ...newAnimeByGenre]);

          // Add anime to local storage based on genre
          newAnimeByGenre.forEach(anime => {
            const genreKey = `genre_${genre}`;
            const storedAnimeList = localStorage.getItem(genreKey);
            const updatedAnimeList = storedAnimeList ? JSON.parse(storedAnimeList) : [];
            updatedAnimeList.push(anime);
            localStorage.setItem(genreKey, JSON.stringify(updatedAnimeList));
          });

          hasMore = response.data.pagination.has_next_page;
          page += 1;

          // Add a delay of 1 second between requests
          await new Promise(resolve => setTimeout(resolve, 1000));
        } catch (error) {
          console.error("Failed to fetch anime:", error);
          hasMore = false;
        }
      }
    };

    fetchAnime();
  }, [genre]);

  return (
    <InfiniteScroll
      dataLength={animeList.length}
      next={() => setCurrentPage(prevPage => prevPage + 1)}
      hasMore={hasMorePages}
      loader={<img src={loadingGif} alt="Loading..." />}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      {animeList.map(anime => (
        <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f2f2f2', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <h1 style={{ color: '#333', fontSize: '24px', marginBottom: '10px' }}>{genre}</h1>
          <div key={anime.mal_id}>
            <h2 style={{ color: '#555', fontSize: '20px', marginBottom: '5px' }}>{anime.title}</h2>
            <img src={anime.images.jpg.image_url} alt={anime.title} style={{ width: '200px', height: '300px', marginBottom: '10px' }} />
            <p style={{ color: '#777', fontSize: '16px' }}>{anime.synopsis}</p>
          </div>
        </div>
      ))}
    </InfiniteScroll>
  );
};

export default GenreDetails;