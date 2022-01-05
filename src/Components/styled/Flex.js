import styled from "styled-components";

export const Flex=styled.div`
display:flex;
background-color:${({theme})=>theme.colors.header};

@media (max-width:${({theme})=>theme.mobile.query})
    {flex-direction:column; 
    align-items:center;
    gap:2rem;
    } 
`