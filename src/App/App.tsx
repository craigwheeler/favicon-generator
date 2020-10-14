import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../global/Layout/Layout';
import IconPicker from '../components/icon-picker';
import { FontIcon } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ColorPicker from '../primitives/color-picker';
import Input from '../primitives/input';
import RangeSlider from '../primitives/range-slider';
import { exportComponentAsICO } from '../components/utils/file-converter';

const App = (): JSX.Element => {
  const [icon, setIcon] = useState({ name: 'polymer', code: 'e8ab' });
  const [sliderValue, setSliderValue] = useState(125);
  const [radius, setRadius] = useState(10);
  const [width, setWidth] = useState(192);
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

  const faviconRef = React.createRef<any>();

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

  const handleSliderChange = (e: any): any => {
    const value = Number(e.target.value);
    setSliderValue(value);
  };

  const displayCircle = () => {
    setRadius(50);
    setWidth(192);
  };

  const displaySquare = () => {
    setRadius(10);
    setWidth(192);
  };

  const displayRectangle = () => {
    setRadius(8);
    setWidth(275);
  };

  const handleSave = () => {
    exportComponentAsICO(faviconRef.current);
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
              <RangeSlider value={sliderValue} handleChange={handleSliderChange} label={'Adjust Icon Size'} />
            </div>
            <Divider />
            <div className="component-container favicon-shape">
              <span className="label">Favicon Shape</span>
              <div className="square" onClick={() => displaySquare()} />
              <div className="circle" onClick={() => displayCircle()} />
              <div className="rectangle" onClick={() => displayRectangle()} />
            </div>
            <Divider />
            <div className="component-container">
              <Input label={'Filename'} placeholder="Enter a filename..." />
            </div>
          </div>
          <div className="button-group">
            <button className="save-button" onClick={() => handleSave()}>
              Save
            </button>
          </div>
        </div>
        <div className="design">
          <div id="favicon" className="icon-container">
            <MuiThemeProvider>
              <div
                ref={faviconRef}
                className="icon-background"
                style={{
                  width: `${width}px`,
                  borderRadius: `${radius}%`,
                  backgroundColor: `rgba(${bgColor.r}, ${bgColor.g}, ${bgColor.b}, ${bgColor.a})`,
                }}
              >
                <FontIcon
                  style={{
                    fontSize: sliderValue,
                    color: `rgba(${iconColor.r}, ${iconColor.g}, ${iconColor.b}, ${bgColor.a})`,
                  }}
                  className="material-icons"
                >
                  {icon.name}
                </FontIcon>
              </div>
            </MuiThemeProvider>

            {/* <div className="selected-icon-label">
              <p>Name: {icon.name}</p>
              <p>Code: {icon.code}</p>
            </div> */}
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
    /* display: flex;
    align-items: center;
    min-width: 500px;
    justify-content: left;
    margin-left: 300px; */
    .icon-background {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 2px;
      position: relative;
      height: 192px;
      color: #e8e8e8;
      /* TODO: html2canvas bug - doesnt work with box-shadow */
      /* box-shadow: -3px 1px 20px 9px rgba(0, 0, 0, 0.12); */
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
      text-align: center;
      color: #e8e8e8;
      /* p {
        margin: 5px 0;
      } */
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
      .favicon-shape {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .square {
          border: 1px solid rgba(255, 255, 255, 0.1);
          width: 25px;
          height: 25px;
          border-radius: 10%;
          cursor: pointer;
          background-color: #105cc8;
        }
        .circle {
          border: 1px solid rgba(255, 255, 255, 0.1);
          width: 25px;
          height: 25px;
          border-radius: 50%;
          cursor: pointer;
          background-color: #105cc8;
        }
        .rectangle {
          position: relative;
          width: 35px;
          height: 25px;
          background-color: #105cc8;
          color: white;
          text-align: center;
          text-indent: 0.1em;
          border: 1px solid rgba(255, 255, 255, 0.1);
          cursor: pointer;
          border-radius: 5px;
        }
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
