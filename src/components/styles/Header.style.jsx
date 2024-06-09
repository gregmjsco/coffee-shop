import styled from "styled-components";

export const StyledHeader = styled.header `
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 2rem;
    padding-bottom: 2rem;
    border: 1px solid red;
    position: relative;
    z-index: 9999;
`

export const Nav = styled.nav`
display: flex;
justify-content: space-between;

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 2em;
} 

   li {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    gap: 2em;
   }
    
`

export const Logo = styled.img`
    
`