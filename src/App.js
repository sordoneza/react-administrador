import React from "react"
import logo from "./logo.svg"
import styled from "styled-components"

const Wrapper = styled.div`
  text-align: center;
`

function App() {
  return (
    <Wrapper>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </Wrapper>
  )
}

export default App
