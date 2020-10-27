import React from 'react';
import styled from 'styled-components';
import Layout from '../global/Layout/Layout';
import Home from '../pages/home';
import FaviconGenerator from '../pages/favicon-generator';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = (): JSX.Element => {
  return (
    <Layout title="Favicon Generator">
      <AppContainer>
        <Router>
          <>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/generator">Generator</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/">
                <Home />
              </Route>
              <Route path="/generator">
                <FaviconGenerator />
              </Route>
            </Switch>
          </>
        </Router>
      </AppContainer>
    </Layout>
  );
};

export default App;

const AppContainer = styled.div`
  grid-area: main;
`;
