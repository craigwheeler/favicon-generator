import React from 'react';
import styled from 'styled-components';
import Layout from '../global/Layout/Layout';
import Placeholder from '../assets/images/placeholder.png';

const App = (): JSX.Element => {
  return (
    <Layout title="Favicon Generator">
      <AppContainer>
        <div className="tools">
          <h4>Tools Section</h4>
          <div className="tool-components">
            <div className="component-container">Icon Selector</div>
            <div className="component-container">Adjust Padding</div>
            <div className="component-container">Color Picker</div>
            <div className="component-container">Shape</div>
            <div className="component-container">Effects</div>
            <div className="component-container">Name Input</div>
          </div>
          <div className="button-group">
            <button>Reset</button>
            <button>Save</button>
          </div>
        </div>
        <div className="design">
          <img src={Placeholder} width={200} alt="Icon Plaecholder" />
        </div>
      </AppContainer>
    </Layout>
  );
};

export default App;

const AppContainer = styled.div`
  grid-area: main;
  background-color: #777;
  display: flex;
  height: 100%;
  .tools {
    height: 100%;
    width: 600px;
    background-color: #a7a7a7;
    padding: 20px;
    h4 {
      color: #000;
      text-align: center;
      font-weight: 500;
    }
    .tool-components {
      border: 1px solid #222;
      padding: 10px 5px;
      margin-bottom: 10px;
      height: 700px;
      .component-container {
        border: 1px solid #fff;
        padding: 20px;
        color: #fff;
        margin: 5px;
      }
    }
    .button-group {
      display: flex;
      justify-content: flex-end;
    }
  }
  .design {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
