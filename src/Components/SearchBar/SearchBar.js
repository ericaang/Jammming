import './SearchBar.css';
import React from 'react';


function SearchBar(props){
    let searchTerm = '';
    const search = () => {
        props.onSearch(searchTerm);
    }

    const handleTermChange = (e) => {
        searchTerm = e.target.value;

    }
    return (
        <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" onChange={handleTermChange}/>
            <button className="SearchButton" onClick={search}>SEARCH</button>
        </div>
    )
}
export default SearchBar;