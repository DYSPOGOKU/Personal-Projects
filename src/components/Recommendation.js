// recommendation.js
import React, { useEffect, useState } from 'react';
import RecommendationItem from './RecommendationItem';
import axios from 'axios';
import Spinner from './Spinner';
const Recommendation = () => {
  const [recommendation, setRecommendation] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendation = async () => {
      try {
        const response = await axios.get('https://api.jikan.moe/v4/recommendations/anime');
        setRecommendation(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recommendation:', error);
        setLoading(false);
      }
    };
    fetchRecommendation();
  }, []);

  return (
    <div className='container'>
      <div className='row'>
      {loading ? (
        <div>{<Spinner/>}</div>
      ) : (
        recommendation.map((recommendationItem) => {
          return recommendationItem.entry.map((entryItem) => {
            return (
              <div className='col-md-3'>
                <RecommendationItem
                  key={entryItem.mal_id}
                  title={entryItem.title}
                  image={entryItem.images.jpg.image_url}
                  url={entryItem.url}
                />
              </div>
            );
          });
        })
      )}
      </div>
    </div>
  );
};

export default Recommendation;
