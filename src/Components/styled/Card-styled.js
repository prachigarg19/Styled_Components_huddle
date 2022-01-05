import styled from 'styled-components';
export const Cardstyled=styled.div`
display:flex;
margin:5rem;
padding:8rem;
border-radius:15px;
background-color:#fff;
box-shadow: 0 0 10px gray;
&>div{
    h2{
        font-family:${({theme})=>theme.fonts.fontFamily2};
        font-size:5rem;
    }
    p{
        font-family:${({theme})=>theme.fonts.fontFamily1};
        font-size:2rem;
    }
    flex-basis:60%;
}

`