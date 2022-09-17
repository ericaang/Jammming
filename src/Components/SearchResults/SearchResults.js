import './SearchResults.css';
import Tracklist from '..//Tracklist/Tracklist';
import React, {useState} from 'react';

function SearchResults({results, onAdd}) {

    return (
        <div className="SearchResults">
            <h2>Results</h2>
           {/*-- Add a TrackList component -->*/}
           <Tracklist results={results} onAdd={onAdd} isRemoval={false} />

            </div>
    );
}

export default SearchResults;