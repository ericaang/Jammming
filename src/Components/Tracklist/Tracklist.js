import Track from '../Track/Track';
import './Tracklist.css';

function Tracklist({results, onAdd, onRemove, isRemoval}) {

    //console.log(results);

    /* const renderTrack = () => {
        let str = '';
        if(results) return;
        else {
            results.map(track => (
                str += `<Track key={track.id} track={track} onAdd={onAdd} onRemove={onRemove} isRemoval={isRemoval} />`
        ));
    }
       return str;
    } */

    return (
        <div className="TrackList">
            {/*<!-- You will add a map method that renders a set of Track components  -->*/}
            {results.map(track => (
               <Track key={track.id} track={track} onAdd={onAdd} onRemove={onRemove} isRemoval={isRemoval} />
        ))}
        </div>

    )
}
export default Tracklist;