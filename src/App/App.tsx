import React from 'react';
import styled from 'styled-components';
import Layout from '../global/Layout/Layout';

const App = (): JSX.Element => {
  return (
    <Layout title="Favicon Generator">
      <AppContainer />
    </Layout>
  );
};

export default App;

const AppContainer = styled.div`
  grid-area: main;
`;
