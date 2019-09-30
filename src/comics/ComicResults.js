import React, {useState, useEffect} from 'react';

import ComicDisplay from './ComicDisplay';

const ComicResults = (props) => {
    const [comicResults, setComicResults] = useState([]);

    const baseURL = 'https://gateway.marvel.com:443/v1/public/comics?';
    const apikey = '94bfc2c1e9454783329b955ba1751491'
    // let url;

    const fetchComicResults = () => {
        let url = `${baseURL}titleStartsWith=${props.comicName}&apikey=${apikey}`;
        console.log(url);
        fetch(url)
        .then(result => result.json())
        .then(json => setComicResults(json.data.results))

    }

    useEffect(() => {
        fetchComicResults();
    }, [])

    return(
        <div>
            {comicResults.length == 0 ? <></> : <ComicDisplay comicResults={comicResults} searchBar={props.searchBar} searchBarOn={props.searchBarOn} searchBarOff={props.searchBarOff}  />}
        </div>
    )
}

export default ComicResults;