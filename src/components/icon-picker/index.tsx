import React from 'react';
import MaterialUiIconPicker from './src/MaterialUiIconPicker';

const IconPicker = (): JSX.Element => {
  const showPickedIcon = (icon: any): any => {
    console.info(icon); // prints {name: "access_alarm", code: "e190"}
  };
  //@ts-ignore
  return <MaterialUiIconPicker onPick={showPickedIcon} />;
};

export default IconPicker;
