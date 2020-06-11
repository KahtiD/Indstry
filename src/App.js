import React from 'react'
import { Home } from './containers'
import { Header } from './components'
import { Route, Switch } from 'react-router-dom'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import media from 'styled-media-query'
import { theme } from './utils/theme'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Helvetica Neue;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
const Container = styled.main`
  max-width: 1280px;
  margin: auto;
  ${media.greaterThan("1280px")`
    border-left: 1px solid #003bff;
    border-right: 1px solid #003bff;
`}
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Container>
        <Switch>
          <Route path="/" exact component={Home}  />
        </Switch>
      </Container>
    </ThemeProvider>
  );
}

export default App;
