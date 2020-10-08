import React from 'react';
import styled from 'styled-components';
import Layout from '../global/Layout/Layout';
import Placeholder from '../assets/images/placeholder_2.png';
import IconPicker from '../components/icon-picker';

const App = (): JSX.Element => {
  return (
    <Layout title="Favicon Generator">
      <AppContainer>
        <div className="tools">
          <div className="tool-components">
            <div className="component-container">
              <IconPicker />
            </div>
            <div className="component-container">Adjust Padding</div>
            <div className="component-container">Color Picker</div>
            {/* <div className="component-container">Shape</div> */}
            {/* <div className="component-container">Effects</div> */}
            <div className="component-container">Name Input</div>
          </div>
          <div className="button-group">
            <button className="save-button">Save</button>
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
    .tool-components {
      border: 1px solid #222;
      padding: 10px 5px;
      margin-bottom: 20px;
      height: 750px;
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
      .save-button {
        border: 0;
        background-color: #2979ff;
        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
        cursor: pointer;
        padding: 10px 20px;
        color: #fff;
        outline: 0;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 14px;
      }
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
