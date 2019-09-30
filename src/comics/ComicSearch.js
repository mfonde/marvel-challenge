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
  
    const searchBarOn = (e) => {
      window.location.reload();
    }

    const comicResultsPageOn = (e) => {
        e.preventDefault();
        setComicResultsPage(true);
        searchBarOff();
    }

    return(
        <div>
            {searchBar ?
            <div>
            <h2>Search For a Marvel Comic Series</h2>
            <Form onSubmit={comicResultsPageOn}>
                <FormGroup>
                    <Label htmlFor='comicName'/>
                    <Input name='comicName' value={comicName} onChange={(e) => setComicName(e.target.value)} />
                    <Button className="button" type='submit'>Search</Button>
                </FormGroup>
            </Form> 
            </div>
            : <></> 
            }
            {comicResultsPage ? <ComicResults comicName={comicName} searchBar={searchBar} searchBarOn={searchBarOn} searchBarOff={searchBarOff} detailView={props.detailView} setDetailView={props.setDetailView} /> : <></>}
        </div>
    )
}

export default ComicSearch;