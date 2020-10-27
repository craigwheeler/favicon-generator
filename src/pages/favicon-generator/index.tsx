import React, { useState } from 'react';
import styled from 'styled-components';
import { FontIcon } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconPicker from '../../components/icon-picker';
import ColorPicker from '../../primitives/color-picker';
import RangeSlider from '../../primitives/range-slider';
import { createFaviconPkg } from '../../components/utils/file-converter';

const FaviconGenerator = (): JSX.Element => {
  const [icon, setIcon] = useState({ name: 'sentiment_very_satisfied', code: 'e815' });
  const [sliderValue, setSliderValue] = useState(125);
  const [radius, setRadius] = useState(50);
  const [width, setWidth] = useState(192);
  const [isDisabled, setIsDisabled] = useState(false);

  const [bgColor, setBgColor] = useState({
    r: 16,
    g: 92,
    b: 200,
    a: 100,
  });
  const [iconColor, setIconColor] = useState({
    r: 255,
    g: 255,
    b: 255,
    a: 100,
  });

  const faviconRef = React.createRef<any>();

  const showPickedIcon = (icon: any): any => {
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

  // TODO: disabled rect need to look into consistent
  // file naming which contradicts files sizes
  // const displayRectangle = () => {
  //   setRadius(8);
  //   setWidth(275);
  // };

  const handleSave = () => {
    setIsDisabled(true);
    createFaviconPkg(faviconRef.current, setIsDisabled);
  };

  return (
    <Container>
      <div className="tools-section">
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
            <div className="circle" onClick={() => displayCircle()} />
            <div className="square" onClick={() => displaySquare()} />
            {/* <div className="rectangle" onClick={() => displayRectangle()} /> */}
          </div>
          <Divider />
          {/* <Divider />
            <div className="component-container">
              <Input label={'Filename'} placeholder="Enter a filename..." />
            </div> */}
        </div>
        <div className="button-group">
          <button className="save-button" onClick={() => handleSave()} disabled={isDisabled}>
            Save
          </button>
        </div>
      </div>
      <div className="design-section">
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
                  color: `rgba(${iconColor.r}, ${iconColor.g}, ${iconColor.b}, ${iconColor.a})`,
                }}
                className="material-icons"
              >
                {icon.name}
              </FontIcon>
            </div>
          </MuiThemeProvider>

          <div className="selected-icon-label">
            <p>Name: {icon.name}</p>
            <p>Code: {icon.code}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FaviconGenerator;

const Divider = styled.div`
  border-top: 1px dotted #4c4c4c;
`;

const Container = styled.div`
  display: flex;
  height: 100%;

  .tools-section {
    background-color: #171c25;
    padding: 20px;
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
        .search {
          min-width: 400px;
        }
      }
    }
    .button-group {
      display: flex;
      justify-content: flex-end;
      .save-button {
        border: 0;
        background-color: #105cc8;
        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
        cursor: pointer;
        padding: 10px 30px;
        color: #e8e8e8;
        outline: 0;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 14px;
        border-radius: 3px;
      }
    }
  }

  .design-section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2c2d35;
    .icon-container {
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
        font-size: 12px;
        margin-top: 40px;
      }
    }
  }
`;
