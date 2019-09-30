import React, {useState} from 'react';
import {Card, CardImg, CardBody, CardTitle, Button} from 'reactstrap';

import DetailView from './DetailView'

const ComicDisplay = (props) => {
    const [comicToView, setComicToView] = useState({});

    const detailViewOn = (comic) => {
        props.setDetailView(true);
        setComicToView(comic);
    }

    const detailViewOff = () => {
        props.setDetailView(false);
    }

    const increaseOffset = () => {
        props.setOffset(props.offset + 20);
        props.fetchComicResults();
    }

    const decreaseOffset = () => {
        props.setOffset(props.offset - 20);
        props.fetchComicResults();
    }

    const comicDisplayGrid = () => {
        return props.comicResults.map((comic, ind) => {
            const p = comic.thumbnail.path;
            const e = comic.thumbnail.extension;

            return (
                  <Card key={ind} className="card">
                    <Button className="button" onClick={()=> {detailViewOn(comic); props.searchBarOff()}}>
                        <CardImg top width="100%" src={`${p}/standard_xlarge.${e}`} alt="Image Not Available" />
                    </Button>
                    <CardBody>
                      <CardTitle>{comic.title}</CardTitle>
                    </CardBody>
                  </Card>
              );
        })
    }
    
    return(
        <div>
        {
            props.detailView ? 
            <DetailView comicToView={comicToView} detailViewOff={detailViewOff} /> 
            : <div>
                <Button className="button" onClick={()=>{props.searchBarOn()}}>Back To Search</Button>
                <p>Click An Image For Detail View</p>
                <div className="container">
                {comicDisplayGrid()}
                </div>
                <div className="navButtons">
                {props.offset > -20 ? <Button className="previousPage button" onClick={()=>{decreaseOffset()}}>Previous Page</Button> : null}
                {props.comicResults.length == 20 ? <Button className="nextPage button" onClick={()=>{increaseOffset()}}>Next Page</Button> : null}
                </div>
            </div>
    }
        </div>
    )
}

export default ComicDisplay;