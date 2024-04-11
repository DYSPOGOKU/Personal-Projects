import {React,useState,useEffect} from 'react'
import axios from 'axios'
import Spinner from './Spinner';
import AnimeItem from './AnimeItem';
const Topanime = () => {
  const [topItem,setTopItem]=useState([])
  const [loading,setLoading]=useState(true)
  const url="https://api.jikan.moe/v4/top/anime"

  useEffect(()=>{
    const fetchData = async () => {
      const response = await axios.get(url)
      setTopItem(response.data.data)
      setLoading(false)
    }
    fetchData()
  },[])
  return (
    <div>
      <div className='container'>
        <div className='row'>
          {loading ? (
            <div>{<Spinner/>}</div>
          ) : (
            topItem.map((topItem) => {
              return <div className='col-md-3'>
                <AnimeItem
                  key={topItem.mal_id}
                  title={topItem.title}
                  image={topItem.images.jpg.image_url}
                  episodes={topItem.episodes}
                  rating={topItem.score}
                  synopsis={topItem.synopsis}
                />
              </div>
            })
          )}
        </div>
      </div>
    </div>
  )
}

export default Topanime