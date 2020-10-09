import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

const ColorPicker = ({ onColorChange }: any): JSX.Element => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const [color, setColor] = useState({
    r: 241,
    g: 112,
    b: 19,
    a: 1,
  });

  const handleClick = (): void => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = (): void => {
    setDisplayColorPicker(false);
  };

  const handleChange = (color: any) => {
    setColor(color.rgb);
  };

  const handleChangeComplete = (color: any) => {
    onColorChange(color.rgb);
  };

  const popover: any = {
    position: 'absolute',
    zIndex: '2',
  };
  const cover: any = {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
  };

  const swatch: any = {
    padding: '5px',
    background: '#fff',
    borderRadius: '1px',
    boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
    display: 'inline-block',
    cursor: 'pointer',
  };

  const swatchColor: any = {
    width: '36px',
    height: '14px',
    borderRadius: '2px',
    background: `rgb(${color.r}, ${color.g}, ${color.b})`,
  };

  return (
    <div>
      <div style={swatch} onClick={handleClick}>
        <div style={swatchColor} />
      </div>
      {displayColorPicker && (
        <div style={popover}>
          <div style={cover} onClick={handleClose} />
          <SketchPicker
            color={{
              r: color.r,
              g: color.g,
              b: color.b,
              a: color.a,
            }}
            onChange={handleChange}
            onChangeComplete={handleChangeComplete}
          />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
