import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../CSS/Genres.css';
const API_URL = "https://api.jikan.moe/v4/anime";

const Genres = () => {
  const [action,setAction]=useState([])
  const [adventure,setAdventure]=useState([])
  const [comedy,setComedy]=useState([])
  const [drama,setDrama]=useState([])
  const [fantasy,setFantasy]=useState([])
  const [mystery,setMystery]=useState([])
  const [romance,setRomance]=useState([])
  const [scifi,setScifi]=useState([])
  const [sol,setSol]=useState([])
  const [sports,setSports]=useState([])
  const [suspense,setSuspense]=useState([])
  const [isekai,setIsekai]=useState([])
  const [mecha,setMecha]=useState([])
  const [school,setSchool]=useState([])
  const [shounen,setShounen]=useState([])
  const [data, setData] = useState([]);
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  const genres = ['Romance', 'Sci-Fi', 'Slice Of Life', 'Sports', 'Suspense', 'Isekai', 'Mecha', 'School', 'Shounen','action','adventure','comedy','drama','fantasy','mystery'];

  return (
    <div className="big-card">
      {genres.map((genre) => (
        <Link key={genre} to={`/genre/${genre}`} className="small-card" style={{backgroundColor: getRandomColor()}}>
          {genre}
        </Link>
      ))}
    </div>
  );
};

export default Genres;