import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../global/Layout/Layout';
import IconPicker from '../components/icon-picker';
import { FontIcon } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ColorPicker from '../primitives/color-picker';
import Input from '../primitives/input';

const App = (): JSX.Element => {
  const [icon, setIcon] = useState({ name: '360', code: 'e577' });
  const [size, setSize] = useState(125);

  const [bgColor, setBgColor] = useState({
    r: 75,
    g: 135,
    b: 237,
    a: 100,
  });

  const [iconColor, setIconColor] = useState({
    r: 255,
    g: 255,
    b: 255,
    a: 1,
  });

  const showPickedIcon = (icon: any): any => {
    console.info('Selected Icon', icon); // prints {name: "access_alarm", code: "e190"}
    setIcon(icon);
  };

  const updateBGColor = (color: any): any => {
    setBgColor(color);
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
              <span className="label">Background Color </span>
              <ColorPicker onColorChange={updateBGColor} currentColor={bgColor} />
              <span className="label">Icon Color </span>
              <ColorPicker onColorChange={updateIconColor} currentColor={iconColor} />
            </div>
            <Divider />
            <div className="component-container">
              <span className="label">Favicon Shape</span>
            </div>
            <Divider />
            <div className="component-container">
              <span className="label">Adjust Padding</span>
            </div>
            {/* <Divider />
            <div className="component-container">
              <span className="label">Adjust Effects</span>
            </div> */}
            <Divider />
            <div className="component-container">
              {/* <span className="label">Filename Input</span> */}
              <Input label="Filename Input" />
            </div>
          </div>
          <div className="button-group">
            <button className="save-button">Save</button>
          </div>
        </div>
        <div className="design">
          <div className="icon-container">
            <div
              className="icon-background"
              style={{ backgroundColor: `rgba(${bgColor.r}, ${bgColor.g}, ${bgColor.b}, ${bgColor.a})` }}
            >
              <MuiThemeProvider>
                <FontIcon
                  style={{
                    fontSize: size,
                    color: `rgba(${iconColor.r}, ${iconColor.g}, ${iconColor.b}, ${bgColor.a})`,
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

const Divider = styled.div`
  border-top: 1px dotted #4c4c4c;
`;

const AppContainer = styled.div`
  grid-area: main;
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
      color: #e8e8e8;
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
      color: #e8e8e8;
      p {
        margin: 5px 0;
      }
    }
  }

  .tools {
    height: 100%;
    background-color: #171c25;
    padding: 20px;
    /* box-shadow: -20px 0px 20px 20px #171c25; */
    border-left: 1px dotted #4c4c4c;
    .tool-components {
      padding: 10px 5px;
      margin-bottom: 20px;
      height: 750px;
      .label {
        font-size: 13px;
        letter-spacing: 0.3px;
        font-weight: 600;
      }
      .color-picker {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .component-container {
        padding: 20px;
        color: #e8e8e8;
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
        padding: 10px 25px;
        color: #e8e8e8;
        outline: 0;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 14px;
        border-radius: 3px;
      }
    }
  }
  .design {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2c2d35;
  }
`;
