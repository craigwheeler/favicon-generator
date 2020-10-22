import React from 'react';
import styled from 'styled-components';
import Layout from '../global/Layout/Layout';
import Home from '../pages/home';
import FaviconGenerator from '../pages/favicon-generator';

const App = (): JSX.Element => {
  return (
    <Layout title="Favicon Generator">
      <AppContainer>
        {/* <Home /> */}
        <FaviconGenerator />
      </AppContainer>
    </Layout>
  );
};

export default App;

const AppContainer = styled.div`
  grid-area: main;
`;
