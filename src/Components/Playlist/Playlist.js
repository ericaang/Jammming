import './Playlist.css'
import Tracklist from '..//Tracklist/Tracklist';

function Playlist({playlistTracks, onRemove, onNameChange, onSave, playlistName}){

    const handleNameChange = (e) => {
        const name = e.target.value;
        onNameChange(name);

    }
    
    
    return (
        <div className="Playlist">
            <input onChange={handleNameChange} value={playlistName} />
            {/*<!-- Add a TrackList component -->*/}
            <Tracklist results={playlistTracks} onRemove={onRemove} isRemoval={true}/>
            <button className="Playlist-save" onClick={onSave}>SAVE TO SPOTIFY</button>
            </div>
    )
    
}
export default Playlist;