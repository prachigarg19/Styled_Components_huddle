import React from 'react'
import { Cardstyled} from './styled/Card-styled';
import {content} from '../Boxcontent.js';

export default function Card(props) {
    return (
        <>
       <Cardstyled>
            <div>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
            </div>
            <div>
                <img src={`../images/${props.image}`}/>
            </div>
       </Cardstyled>
        </>
    )
}
