import styled from 'styled-components';
import { StyledButton } from './Button/Button.style';
import { Link } from 'react-router-dom'

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 50px; 
  height: auto;
  margin-right: 20px;
`;

const Sections = styled.div`
  display: flex;
`;

const SectionLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
`;

const RightSide = styled.div`
  display: flex;
  gap: 2em;
`;


const Navbar = () => {
  return (
    <NavbarContainer>
      <LeftSide>
        <Logo src="logo.png" alt="Logo" />
        <Sections>
          <SectionLink to="/">Home</SectionLink>
          <SectionLink to="/shop">Shop</SectionLink>
        </Sections>
      </LeftSide>
      <RightSide>
        <StyledButton> Learn More </StyledButton>
        <StyledButton> Sign Up </StyledButton>
      </RightSide>
    </NavbarContainer>
  );
};

export default Navbar;