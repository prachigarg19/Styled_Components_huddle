import React from 'react'
import { Buttonstyled } from './styled/Navbar-styled'

export default function Button(props) {
    return (
        <Buttonstyled bg={props.bg} color={props.color} padding={props.padding} box={props.box}>
           {props.text}
        </Buttonstyled>
    )
}
