import React, { useState, useEffect } from 'react';
import { FontIcon, LinearProgress } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Radium from 'radium';
import styled from 'styled-components';

interface IIconPicker {
  onSelect: (icon: any) => void;
}

const IconPicker = ({ onSelect }: IIconPicker): JSX.Element => {
  const [selected, setSelected] = useState({ name: '', code: '' });
  const [showClear, setShowClear] = useState(false);
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    fetchIcons();
  }, []);

  const fetchIcons = () => {
    const icons =
      'https://raw.githubusercontent.com/google/material-design-icons/master/font/MaterialIcons-Regular.codepoints';

    return fetch(icons)
      .then((response) => response.text())
      .then((data) => data.split('\n'))
      .then((namesAndCodes) =>
        namesAndCodes.map((nameAndCode) => {
          const parts = nameAndCode.split(' ');
          return {
            name: parts[0],
            code: parts[1],
          };
        }),
      )
      .then((icons: any) => {
        setIcons(icons);
      });
  };

  const select = (icon: any) => {
    onSelect(icon);
    setSelected(icon);
  };

  const filterList = (e: any) => {
    if (e.target.value.toLowerCase().length === 0) {
      clearSearch();
    } else {
      const updatedList = icons.filter((item: any) => {
        const search = item.name.split('_').map((item: any) => item.search(e.target.value.toLowerCase()) !== -1);
        return search.indexOf(true) > -1;
      });

      setIcons(updatedList);
      setShowClear(true);
    }
  };

  const clearSearch = () => {
    setShowClear(false);
    fetchIcons();
  };

  const returnedIcons = icons.map((icon: any, index: any) => {
    return (
      <ItemContainer key={index} onClick={() => select(icon)}>
        {selected?.name === icon.name ? <SelectedBackgroundBox /> : <BackgroundBox />}
        <FontIcon className="material-icons">{icon.name}</FontIcon>
      </ItemContainer>
    );
  });

  return (
    <MuiThemeProvider>
      <>
        <Header>
          <div className="search">
            <FontIcon className="material-icons searchIcon">search</FontIcon>
            <input type="text" className="input" placeholder="Search Icons..." onChange={(e) => filterList(e)} />
            {showClear && (
              <FontIcon onClick={clearSearch} className="material-icons closeIcon">
                close
              </FontIcon>
            )}
          </div>
        </Header>
        {icons.length > 0 ? <IconGrid>{returnedIcons}</IconGrid> : <LinearProgress mode="indeterminate" />}
      </>
    </MuiThemeProvider>
  );
};

export default Radium(IconPicker);

const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;

  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
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

  .input {
    flex: 1;
    border: none;
    padding: 15px;
    font-size: 17px;
    &:focus {
      outline: none;
    }
  }
  .search {
    display: flex;
    margin-top: 10;
    position: relative;
    z-index: 4;
    background: #fff;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    box-shadow: rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px,
      rgba(0, 0, 0, 0.2) 0px 2px 4px -1px;
  }
  .searchIcon {
    color: #ddd;
  }
  .closeIcon {
    cursor: pointer;
    color: #555;
  }
`;

const ItemContainer = styled.div`
  position: relative;
  text-align: center;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;

  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
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
`;

const IconGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-x: hidden;
  justify-content: center;
  height: 300px;
  width: 400px;
  background: #fff;
  color: #222;
  padding-top: 15px;
  /* background-color: #333333; */
`;

const BackgroundBox = styled.div`
  position: absolute;
  top: 0;
  background-color: #c7c7c7;
  border-radius: 2px;
  width: 50px;
  height: 50px;
  opacity: 0;
`;

const SelectedBackgroundBox = styled(BackgroundBox)`
  opacity: 1;
`;
