import React from 'react';

const MangaItem = (props) => {
  const { image, title, rating, chapters, synopsis } = props;

  return (
    <div className="card h-100">
      <div className="d-flex justify-content-center">
        <img src={image} className="card-img-top" alt={title} style={{ maxWidth: '400px', maxHeight: '500px' }} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{synopsis}</p>
        <p className="card-text"><small className="text-body-secondary"><h4>Rating:{rating}</h4></small></p>
        <p className="card-text"><small className="text-body-secondary"><h4>Number of chapters:{chapters}</h4></small></p>
      </div>
    </div>
  );
};

export default MangaItem;
