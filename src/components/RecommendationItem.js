import React from 'react';

const RecommendationItem = (props) => {
  const { image, title, url} = props;
  const handleButtonClick = () => {
    window.open(url, '_blank');
  };
  return (
    <div className="card h-100">
      <div className="d-flex justify-content-center">
        <img src={image} className="card-img-top" alt={title} style={{ maxWidth: '400px', maxHeight: '500px' }} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h5><button onClick={handleButtonClick}>Read More</button></h5>
      </div>
    </div>
  );
};

export default RecommendationItem;
