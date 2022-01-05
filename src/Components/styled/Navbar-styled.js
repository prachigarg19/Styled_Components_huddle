import styled from 'styled-components';

export const Navbarstyled=styled.div `
 display:flex;
 flex-direction:row;
 justify-content:space-between;
 padding-top:2rem;
 background-color:${({theme})=>theme.colors.header};
 

 @media (max-width:${({theme})=>theme.mobile.query})
    {flex-direction:column; 
    align-items:center;
    gap:2rem;
    padding:2rem 2.5rem;
    width:100vw;
    }         
`

export const Buttonstyled=styled.button`
    margin-right: 6rem;
    font-size: 1.2rem;
    background-color:${(props)=>props.bg};
    font-family:${({theme})=>theme.fonts.fontFamily1};
    border:none;
    box-shadow: ${(props)=>props.box};
    border-radius:50px;
    padding:${(props)=>props.padding};
    font-weight:700;
    color:${(props)=>props.color};
    &:hover{
        opacity:0.9;
        transform:scale(0.98);
    }
    @media (max-width:${({theme})=>theme.mobile.query})
    { margin-right:0rem;
    } 
`