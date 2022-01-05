import styled from "styled-components";

export const Flex=styled.div`
display:flex;
background-color:${props=>props.color};
width:100vw;
div{
    display:flex;
    flex-direction:column;
    align-items:center;

img{
    flex-basis:40%;
    padding:5rem;
    
    row-gap:-2rem
}}
@media (max-width:${({theme})=>theme.mobile.query})
    {flex-direction:column; 
    align-items:center;
    gap:2rem;
    width:100vw;
    margin-left:auto;
        margin-right:auto;
    } 
@media(max-width:750px)
    {  padding:2.5rem;
    }
`