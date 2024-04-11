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
    const fetchAnime = async () => {
      if (!hasMorePages) return;

      try {
        const response = await axios.get(`https://api.jikan.moe/v4/anime?page=${currentPage}`);
        const newAnimeByGenre = response.data.data.filter(anime =>
          anime.genres.some(g => g.name === genre)
        );
        setAnimeList(prevAnimeList => [...prevAnimeList, ...newAnimeByGenre]);

        setHasMorePages(response.data.pagination.has_next_page);
        setCurrentPage(prevPage => prevPage + 1);
      } catch (error) {
        console.error("Failed to fetch anime:", error);
        setHasMorePages(false);
      }
    };

    fetchAnime();
  }, [genre, currentPage, hasMorePages]);

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