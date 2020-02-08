// @flow
import React from "react"
import logo from "./logo.svg"
import styled from "styled-components"

const Wrapper = styled.div`
  text-align: center;
`
type Props = {
  label?: string, // ? con este simbolo se especifica que esta propiedad es opcional
  to: string,
  children?: any
}

const Link = ({ label, to, children }: Props) => {
  return (
    <a className="App-link" href={to} target="_blank" rel="noopener noreferrer">
      {label || children}
    </a>
  )
}

function App() {
  return (
    <Wrapper>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="http://reactjs.org">Click Aqui</Link>
      </header>
    </Wrapper>
  )
}

export default App
