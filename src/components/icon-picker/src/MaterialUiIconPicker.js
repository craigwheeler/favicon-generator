import React from 'react';
import { FontIcon, LinearProgress } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import IconsStorage from './IconsStorage';
import Radium from 'radium';
import styled from 'styled-components';

class MaterialUiIconPicker extends React.Component {
  iconsStorage;
  styles;

  constructor(props) {
    super(props);
    this.state = {
      pickerDialogOpen: false,
      _icons: [],
      icons: [],
      icon: null,
    };
    this.iconsStorage = new IconsStorage();
  }

  componentDidMount() {
    if (!document.querySelector('[href="https://fonts.googleapis.com/icon?family=Material+Icons"]')) {
      const link = document.createElement('link');
      link.setAttribute('href', 'https://fonts.googleapis.com/icon?family=Material+Icons');
      link.setAttribute('rel', 'stylesheet');
      document.querySelector('head').appendChild(link);
    }

    this.iconsPromise = this.iconsStorage.getIcons();
    this.iconsPromise.then((icons) => this.showIcons(icons));
  }

  showIcons(icons) {
    this.setState({ pickerDialogOpen: this.state.pickerDialogOpen, _icons: icons, icons: icons });
  }

  handleOpen() {
    this.setState({
      pickerDialogOpen: true,
      _icons: this.state._icons,
      icons: this.state.icons,
      selected: this.state.selected,
      didSearch: this.state.didSearch,
    });
  }

  handleClose() {
    this.setState({
      pickerDialogOpen: false,
      _icons: this.state._icons,
      icons: this.state._icons,
      selected: this.state.selected,
      didSearch: false,
    });
  }

  pickAndClose() {
    this.props.onPick(this.state.selected);
    this.handleClose();
  }

  select(icon) {
    // console.log('icon clicked: ', icon);
    this.props.onPick(this.state.selected);
    this.setState({
      pickerDialogOpen: this.state.pickerDialogOpen,
      icons: this.state.icons,
      _icons: this.state._icons,
      selected: icon,
      didSearch: this.state.didSearch,
    });
  }

  filterList(event) {
    if (event.target.value.toLowerCase().length === 0) {
      this.clearSearch();
    } else {
      let updatedList = this.state._icons;
      updatedList = updatedList.filter(function (item) {
        const searches = item.name
          .split('_')
          .map((namePiece) => namePiece.search(event.target.value.toLowerCase()) !== -1);
        return searches.indexOf(true) > -1;
      });

      this.setState({
        pickerDialogOpen: this.state.pickerDialogOpen,
        _icons: this.state._icons,
        icons: updatedList,
        selected: this.state.selected,
        didSearch: true,
      });
    }
  }

  clearSearch() {
    this.setState({
      pickerDialogOpen: this.state.pickerDialogOpen,
      _icons: this.state._icons,
      icons: this.state._icons,
      selected: this.state.selected,
      didSearch: false,
    });
  }

  render() {
    const icons = this.state.icons.map((icon, index) => {
      return (
        <ItemContainer key={index} onClick={() => this.select(icon)}>
          {this.state.selected && this.state.selected.name === icon.name ? (
            <SelectedBackgroundBox />
          ) : (
            <BackgroundBox />
          )}
          <FontIcon className="material-icons">{icon.name}</FontIcon>
        </ItemContainer>
      );
    });

    return (
      <MuiThemeProvider>
        <>
          <Header>
            <p className="title">{this.props.title}</p>
            <div className="search">
              <FontIcon className="material-icons searchIcon">search</FontIcon>
              <input type="text" className="input" placeholder="Search Icons" onChange={this.filterList.bind(this)} />
              {this.state.didSearch ? (
                <FontIcon onClick={this.clearSearch.bind(this)} className="material-icons closeIcon">
                  close
                </FontIcon>
              ) : null}
            </div>
          </Header>
          {this.state.icons.length > 0 ? <IconsGrid>{icons}</IconsGrid> : <LinearProgress mode="indeterminate" />}
        </>
      </MuiThemeProvider>
    );
  }
}

MaterialUiIconPicker.propTypes = {
  cancelLabel: PropTypes.string,
  label: PropTypes.string,
  title: PropTypes.string,
  onPick: PropTypes.func.isRequired,
  pickLabel: PropTypes.string,
};

export default Radium(MaterialUiIconPicker);

const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  .input {
    flex: 1;
    border: none;
    padding: 15px;
    font-size: 17px;
    margin: 0 40px;
    &:focus {
      outline: none;
    }
  }
  .title {
    margin: 0;
    padding-left: 24px;
    padding-top: 0;
    padding-right: 24px;
    text-transform: uppercase;
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
  text-align: center;
  width: 50px;
  flex-grow: 1;
  margin-bottom: 10px;
  position: relative;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
`;

const IconsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-x: hidden;
  height: 300px;
  background: #fff;
  color: #222;
  padding-top: 15px;
`;

const BackgroundBox = styled.div`
  position: absolute;
  top: 0;
  background-color: #2979ff6e;
  border-radius: 2px;
  width: 50px;
  height: 45px;
  opacity: 0;
`;

const SelectedBackgroundBox = styled(BackgroundBox)`
  opacity: 1;
`;
