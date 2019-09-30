import React from 'react';
import {Button} from 'reactstrap';

const DetailView = (props) => {
    return(
        <div>
            <h1>{props.comicToView.title}</h1>
            <Button onClick={()=> {props.detailViewOff()}}>Go Back</Button>
        </div>
    )
}

export default DetailView;