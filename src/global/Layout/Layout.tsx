import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import GlobalStyle from '../GlobalStyle';
import Header from './Header';
import Footer from './Footer';
import SideNav from './SideNav';
import theme from '../theme';
import Home from '../../pages/home';
import FaviconGenerator from '../../pages/favicon-generator';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Layout = ({ title }: { children: JSX.Element; title: string }): JSX.Element => {
  const [isLightTheme] = useState(false);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="favicon generator" content="FaviconGenerator.io" />
      </Helmet>
      <ThemeProvider theme={isLightTheme ? theme.light : theme.dark}>
        <GlobalStyle />
        <Container>
          <Header />
          <Content>
            <Router>
              <SideNav />
              <Switch>
                <Route exact path="/">
                  <Home title={'home'} />
                </Route>
                <Route exact path="/favicon-generator">
                  <FaviconGenerator />
                </Route>
              </Switch>
            </Router>
          </Content>
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Layout;

const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-areas:
    'header'
    'content'
    'footer';
  grid-template-rows: 75px 1fr 50px;
`;

const Content = styled.div`
  grid-area: content;
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-template-areas: 'sidebar main';
`;
