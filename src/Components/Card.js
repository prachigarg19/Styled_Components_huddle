import React from 'react'
import { Cardstyled,Image} from './styled/Card-styled';
// import {content} from '../images/illustration-flowing-conversation.svg';
export default function Card(props) {
    return (
        <>
       <Cardstyled layout={props.id%2==0&&'row-reverse'}>
            <div>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
            </div>
            <Image>
            <img src={require(`../images/${props.image}`)} />
            </Image>
            
       </Cardstyled>
        </>
    )
}
