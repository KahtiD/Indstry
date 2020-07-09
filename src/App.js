import React from 'react'
import { Home } from './containers'
import { Header, Footer } from './components'
import { Route, Switch } from 'react-router-dom'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components/macro'
import media from 'styled-media-query'
import { theme } from './utils/theme'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    font-family: Helvetica Neue;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
const Container = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  height: 100%;
  ${media.greaterThan("1280px")`
    border-left: 1px solid ${props => props.theme.brandColor};
    border-right: 1px solid ${props => props.theme.brandColor};
    // z-index: 2;
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
        <Footer />
    </ThemeProvider>
  );
}

export default App;
