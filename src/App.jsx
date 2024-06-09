import Container from './components/styles/Container.style'
import Header  from './components/Header.jsx'
import StyledButton from './components/styles/Button/Button'
import GlobalStyles from './components/styles/Global'

function App() {

  return (
    <>
      <GlobalStyles></GlobalStyles>
      <Header />
      <Container>

      <h1>TEST</h1>
      <button>Button</button>
      <StyledButton>Styled Button</StyledButton>

      </Container>
    </>
  )
}

export default App
