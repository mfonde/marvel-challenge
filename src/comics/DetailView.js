import React from 'react';
import {Button} from 'reactstrap';

const DetailView = (props) => {
    const p = props.comicToView.thumbnail.path;
    const e = props.comicToView.thumbnail.extension;
    
    return(
        <div className="detailView">
            <img src={`${p}/landscape_incredible.${e}`} alt="Image Not Available" />
            <h1>{props.comicToView.title}</h1>
            <h6>On Sale Date: {props.comicToView.dates[0].date}</h6>
            <p>{props.comicToView.description}</p>
            <Button className="button" onClick={()=> {props.detailViewOff()}}>Back To Results</Button>
        </div>
    )
}

export default DetailView;