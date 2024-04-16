import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Anime from './components/Anime';
import Home from './components/Home';
import Topanime from './components/Topanime';
import Genres from './components/Genres';
import GenreDetails from './components/GenreDetails';
import Manga from './components/Manga';
function App() {
  const appStyle = {
    backgroundColor: '#121212', // Set background color to #121212
    minHeight: '100vh', // Ensure the background color covers the entire viewport height
  };
  return (
    <div className="App" style={appStyle}>
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/anime" element={<Anime/>}/>
        <Route exact path="/anime/top" element={<Topanime/>}/>
        <Route exact path="/anime/genres" element={<Genres/>}/>
        <Route path="/genre/:genre" element={<GenreDetails/>} />
        <Route exact path="/manga" element={<Manga/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
