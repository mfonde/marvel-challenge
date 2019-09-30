import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

import ComicResults from './ComicResults';

const ComicSearch = (props) => {
    const [comicName, setComicName] = useState('');
    const [comicResultsPage, setComicResultsPage] = useState(false);
    const [searchBar, setSearchBar] = useState(true);

    const searchBarOff = () => {
      setSearchBar(false);
    }
  
    const searchBarOn = () => {
      setSearchBar(true);
    }

    const comicResultsPageOn = (e) => {
        e.preventDefault();
        setComicResultsPage(true);
    }

    return(
        <div>
            {searchBar ?
            <div>
            <h1>Search For a Marvel Comic Series</h1>
            <Form onSubmit={comicResultsPageOn}>
                <FormGroup>
                    <Label htmlFor='comicName'/>
                    <Input name='comicName' value={comicName} onChange={(e) => setComicName(e.target.value)} />
                    <Button type='submit'>Search</Button>
                </FormGroup>
            </Form> 
            </div>
            : <></>
            }
            {comicResultsPage ? <ComicResults comicName={comicName} searchBar={searchBar} searchBarOn={searchBarOn} searchBarOff={searchBarOff} /> : <></>}
        </div>
    )
}

export default ComicSearch;