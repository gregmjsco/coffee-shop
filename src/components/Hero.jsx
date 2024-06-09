import { StyledButton } from './styles/Button/Button.style';
import Container from './styles/Container.style'
import { Flex } from './styles/Flex.style';
import { Image } from './styles/Hero.style';


function Hero() {
    return (
        <>
            <Container>
                <Flex>
                    <Hero>
                        <div>
                            <h1>Late Night Coffee Tokyo</h1>

                            <p>Escape the streets of Tokyo and indulge in the cozy atmosphere of our late night coffee shop</p>

                            <StyledButton>Learn More</StyledButton>
                        </div>
                    </Hero>
                    <Image src='./tokyo.jpg' alt='' />
                </Flex>
            </Container>
        </>
    )
}

export default Hero;