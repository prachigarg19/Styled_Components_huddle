import React from 'react'
import { Buttonstyled } from './styled/Navbar-styled'

export default function Button(props) {
    return (
        <Buttonstyled bg={props.bg}>
           {props.text}
        </Buttonstyled>
    )
}
