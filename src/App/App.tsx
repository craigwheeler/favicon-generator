import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../global/Layout/Layout';
import IconPicker from '../components/icon-picker';
import { FontIcon } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ColorPicker from '../primitives/color-picker';

const App = (): JSX.Element => {
  const [icon, setIcon] = useState({ name: '360', code: 'e577' });
  const [size, setSize] = useState(125);
  const [iconColor, setIconColor] = useState({
    r: 255,
    g: 255,
    b: 255,
    a: 1,
  });
  const [color, setColor] = useState({
    r: 241,
    g: 112,
    b: 19,
    a: 1,
  });

  const showPickedIcon = (icon: any): any => {
    console.info('Selected Icon', icon); // prints {name: "access_alarm", code: "e190"}
    setIcon(icon);
  };

  const updateBGColor = (color: any): any => {
    setColor(color);
  };

  const updateIconColor = (color: any): any => {
    setIconColor(color);
  };

  return (
    <Layout title="Favicon Generator">
      <AppContainer>
        <div className="tools">
          <div className="tool-components">
            <div className="component-container">
              <IconPicker onSelect={showPickedIcon} />
            </div>
            <div className="component-container color-picker">
              <span>Background Color: </span>
              <ColorPicker onColorChange={updateBGColor} />
              <span>Icon Color: </span>
              <ColorPicker onColorChange={updateIconColor} />
            </div>
            <div className="component-container">Adjust Favicon Shape</div>
            <div className="component-container">Adjust Padding</div>
            <div className="component-container">Adjust Icon Effects</div>
            <div className="component-container">Filename Input</div>
          </div>
          <div className="button-group">
            <button className="save-button">Save</button>
          </div>
        </div>
        <div className="design">
          <div className="icon-container">
            <div className="icon-background" style={{ backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})` }}>
              <MuiThemeProvider>
                <FontIcon
                  style={{
                    fontSize: size,
                    color: `rgb(${iconColor.r}, ${iconColor.g}, ${iconColor.b})`,
                  }}
                  className="material-icons"
                >
                  {icon.name}
                </FontIcon>
              </MuiThemeProvider>
            </div>
            <div className="selected-icon-label">
              <h4>Selected Icon</h4>
              <p>Name: {icon.name}</p>
              <p>Code: {icon.code}</p>
            </div>
          </div>
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
  .icon-container {
    display: flex;
    align-items: center;
    .icon-background {
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: -3px 1px 20px 9px rgba(0, 0, 0, 0.12);
      border-radius: 2px;
      position: relative;
      width: 192px;
      height: 192px;
      color: #fff;
      border-radius: 10%;
      .material-icons {
        font-family: 'Material Icons';
        font-weight: normal;
        font-style: normal;
        line-height: 1;
        letter-spacing: normal;
        text-transform: none;
        display: inline-block;
        white-space: nowrap;
        word-wrap: normal;
        direction: ltr;
        -webkit-font-feature-settings: 'liga';
        -webkit-font-smoothing: antialiased;
      }
    }
    .selected-icon-label {
      text-align: left;
      margin-left: 20px;
      width: 300px;
      p {
        margin: 5px 0;
      }
    }
  }

  .tools {
    height: 100%;
    background-color: #a7a7a7;
    padding: 20px;
    .tool-components {
      border: 1px solid #222;
      padding: 10px 5px;
      margin-bottom: 20px;
      height: 750px;
      .color-picker {
        display: flex;
        justify-content: space-between;
      }
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
