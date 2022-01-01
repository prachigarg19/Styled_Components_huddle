import styled from 'styled-components';

export const Navbarstyled=styled.div `
 display:flex;
 flex-direction:row;
 justify-content:space-between;
 padding-top:2rem;
 background-color:${({theme})=>theme.colors.header}
`
export const Buttonstyled=styled.button`
    margin-right: 6rem;
    font-size: 1.2rem;
    background-color:${(props)=>props.bg};
    font-family:${({theme})=>theme.fonts.fontFamily1};
    border:none;
    box-shadow: 0 0 10px gray;
    border-radius:50px;
    padding:0 3rem 0 3rem;
    font-weight:700;
    color:${(props)=>props.color}||#000;
    &:hover{
        opacity:0.9;
        transform:scale(0.98);
    }
`