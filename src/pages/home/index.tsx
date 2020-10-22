import React from 'react';
import styled from 'styled-components';

const Home = (): JSX.Element => {
  return <Styles>Hello Homepage</Styles>;
};

export default Home;

const Styles = styled.div`
  background-color: #222;
  color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
