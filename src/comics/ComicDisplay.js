import React, {useState} from 'react';
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

import DetailView from './DetailView'

const ComicDisplay = (props) => {
    const [detailView, setDetailView] = useState(false);
    const [comicToView, setComicToView] = useState({});

    const detailViewOn = (comic) => {
        setDetailView(true);
        setComicToView(comic);
    }

    const detailViewOff = () => {
        setDetailView(false);
    }

    const comicDisplayGrid = () => {
        return props.comicResults.map((comic, ind) => {
            const p = comic.thumbnail.path;
            const e = comic.thumbnail.extension;

            return (
                  <Card key={ind} className="card">
                    <CardSubtitle>Click Image For Detail View</CardSubtitle>
                    <Button onClick={()=> {detailViewOn(comic); props.searchBarOff()}}><CardImg top width="100%" src={`${p}/standard_xlarge.${e}`} alt="Image Not Available" /></Button>
                    <CardBody>
                      <CardTitle>{comic.title}</CardTitle>
                    </CardBody>
                  </Card>
              );
        })
    }
    
    return(
        <div>
        {detailView ? <DetailView comicToView={comicToView} detailViewOff={detailViewOff} /> : <div className="container">
            {comicDisplayGrid()}
        </div>}
        </div>
    )
}

export default ComicDisplay;