import styled from "styled-components";

export const Content=styled.div`
    display:flex;
    flex-direction:column;
    flex-basis:40%;
    gap:1rem;
    margin:5rem;
    h1{
        font-family:'${({theme})=>theme.fonts.fontFamily2}';
        font-size:2.8rem;
    }
    p{
        font-family:'${({theme})=>theme.fonts.fontFamily1}';
        font-size:1.2rem;
    }
`