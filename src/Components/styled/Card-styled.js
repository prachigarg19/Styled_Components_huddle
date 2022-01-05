import styled from 'styled-components';
export const Cardstyled=styled.div`
display:flex;
margin:9rem;
padding:5rem;
border-radius:15px;
background-color:#fff;
box-shadow: 0 0 10px gray;
align-items:center;
flex-direction=${({layout})=>layout||'row'};
&>div{
    h2{
        font-family:${({theme})=>theme.fonts.fontFamily2};
        font-size:4rem;
    }
    p{
        font-family:${({theme})=>theme.fonts.fontFamily1};
        font-size:2rem;
        color:gray;
    }
    flex-basis:60%;
}
    &:nth-child(2){
        
    }

@media (max-width:1164px)
    {flex-direction:column; 
    align-items:center;
        padding:5em;
        width:80vw;
        margin-left:auto;
        margin-right:auto;
        img{
            width:60%;
        }
    } 
`
export const Image=styled.div`
display:flex;
flex-direction:column;
align-items:center;
img{
    width:80%;
}
`