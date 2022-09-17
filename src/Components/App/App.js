import './App.css';
import SearchBar from '..//SearchBar/SearchBar'
import SearchResults from '..//SearchResults/SearchResults'
import Playlist from '..//Playlist/Playlist';
import Spotify from '../../util/Spotify';
import React, {useEffect, useState} from 'react';
import Start from '../Start/Start';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  const addTrack = (track) =>{
    setPlaylistTracks((prev) => {
      if (!prev.includes(track)){
        return [...prev, track];
      }
      else
      return prev;
    })
  }
  const removeTrack = (track) =>{
    setPlaylistTracks((prev) => {
      return prev.filter(playlistTrack => playlistTrack.id !== track.id)
      
    })

  }
  const updatePlaylistName = (name) => {
    setPlaylistName(name);

  }
  const savePlaylist = () => {
    const trackURIs = [];
    playlistTracks.forEach( track => trackURIs.push(track.uri));
    Spotify.savePlaylist(playlistName, trackURIs);
    setPlaylistName('New Playlist');
    setPlaylistTracks([]);
  }

  const search = (searchTerm) => {
    setSearchResults([]);

    Spotify.search(searchTerm).then((data) => {
      data.forEach((track) => setSearchResults(prev => {return [...prev, track]}))
    });

      
  }
  useEffect(() => {
    if (Spotify.getAccessToken())
      setIsLogin(true);
  }, [])

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        {!isLogin && <Start isLogin={setIsLogin} />}
        {/* <!-- Add a SearchBar component --> */}
        {isLogin && <SearchBar onSearch={search} />}
        <div className="App-playlist">
        {isLogin && <SearchResults results={searchResults} onAdd={addTrack}/>}
         {/*<!-- Add a Playlist component --> */}
         {isLogin && <Playlist playlistTracks={playlistTracks} onRemove={removeTrack} onNameChange={updatePlaylistName} onSave={savePlaylist} playlistName={playlistName}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
