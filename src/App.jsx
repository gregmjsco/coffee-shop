import './App.css'
import styled from 'styled-components'

const StyledButton = styled.button`
  display: inline-block;
    font-weight: 600;
    text-decoration: none;
    letter-spacing: -0.05em;
    background-color: var(--clr-rose);
    color: #f1f5f9;
    padding: 0.5em 1em;
    border-radius: 6px;
    box-shadow: 0 10px 20px rgba(225, 29, 72, 0.5), 0 6px 6px rgba(225, 29, 72, 0.5), 0 0 100px -10px var(--clr-rose);
    transition: transform 0.3s, box-shadow 0.3s;
`

function App() {

  return (
    <>
      <h1>TEST</h1>
      <button>Button</button>
      <StyledButton>Styled Button</StyledButton>
    </>
  )
}

export default App
