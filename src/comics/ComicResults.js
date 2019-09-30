import React, {useState, useEffect} from 'react';

import ComicDisplay from './ComicDisplay';
import APIKEY from '../helpers/environment';

const ComicResults = (props) => {
    const [comicResults, setComicResults] = useState([]);
    const [offset, setOffset] = useState(0);

    const baseURL = 'https://gateway.marvel.com:443/v1/public/comics?';
    const apikey = APIKEY

    const fetchComicResults = () => {
        console.log(offset);
        let url = `${baseURL}titleStartsWith=${props.comicName}&offset=${offset}&apikey=${apikey}`;
        console.log(url);
        fetch(url)
        .then(result => result.json())
        .then(json => {setComicResults(json.data.results)})
    }

    useEffect(() => {
        fetchComicResults();
    }, [])

    return(
        <div>
            {
                comicResults.length == 0 ? 
                    <p>No Results. Please Refresh The Page and Try Again.</p> 
                : <ComicDisplay comicResults={comicResults} searchBarOn={props.searchBarOn} searchBarOff={props.searchBarOff} detailView={props.detailView} setDetailView={props.setDetailView} offset={offset} setOffset={setOffset} fetchComicResults={fetchComicResults} />
            }
        </div>
    )
}

export default ComicResults;