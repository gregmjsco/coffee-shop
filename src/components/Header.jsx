import Container from './styles/Container.style'
import { StyledHeader, Nav, Logo } from './styles/Header.style'
import { StyledButton } from './styles/Button/Button.style';

function Header() {
    return (
        <>
            <StyledHeader>
                <Container>
                    <Nav>
                        <Logo src='./images/logo.svg'></Logo>
                        <ul>
                            <li><a href="#about">About</a></li>
                            <li><a href="#menu">Menu</a></li>
                            <li><a href="#location">Location</a></li>
                        </ul>
                        <StyledButton> Learn More </StyledButton>
                        <StyledButton> Sign Up </StyledButton>
                    </Nav>
                </Container>

           
            </StyledHeader>
        </>
    )
}

export default Header;