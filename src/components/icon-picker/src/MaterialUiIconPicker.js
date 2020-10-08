import React from 'react';
import { FontIcon, LinearProgress } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import IconsStorage from './IconsStorage';
import Radium from 'radium';

class MaterialUiIconPicker extends React.Component {
  iconsStorage;
  styles;

  getStyles() {
    const backgroundBox = {
      backgroundColor: 'rgb(224, 224, 224)',
      borderRadius: 2,
      height: 45,
      opacity: 0,
      position: 'absolute',
      top: 0,
      transitionProperty: 'opacity',
      transitionDuration: '200ms',
      transitionTimingFunction: 'ease-out',
      width: 50,
      transitionDelay: 'initial',
    };

    const selectedBackgroundBox = Object.assign({}, backgroundBox);
    selectedBackgroundBox.opacity = 1;

    return {
      iconsGrid: {
        display: 'flex',
        flexWrap: 'wrap',
        overflowX: 'hidden',
        height: 300,
        background: '#fff',
        color: '#222',
      },
      iconsItem: {
        textAlign: 'center',
        width: '25%',
        flexGrow: 1,
        marginBottom: 10,
        position: 'relative',
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        cursor: 'pointer',
      },
      iconsItemCaption: {
        textTransform: 'uppercase',
        fontSize: 10,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        position: 'relative',
        zIndex: 2,
        maxWidth: 100,
      },
      iconsItemIcon: {
        color: 'rgb(117, 117, 117)',
        fontSize: 30,
        width: 30,
        height: 30,
        marginBottom: 10,
      },
      backgroundBox: backgroundBox,
      selectedBackgroundBox: selectedBackgroundBox,
      header: {
        wrapper: {
          display: 'flex',
          flexDirection: 'column',
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
        },
        input: {
          flex: 1,
          border: 'none',
          padding: 15,
          fontSize: 17,
          margin: '0 40',
          ':focus': {
            outline: 'none',
          },
        },
        icons: {},
        title: {
          margin: 0,
          paddingLeft: 24,
          paddingTop: 0,
          paddingRight: 24,
          textTransform: 'uppercase',
        },
        search: {
          boxShadow:
            'rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px, rgba(0, 0, 0, 0.2) 0px 2px 4px -1px',
          display: 'flex',
          marginTop: 10,
          position: 'relative',
          zIndex: 4,
          background: '#fff',
          alignItems: 'center',
          paddingLeft: 10,
          paddingRight: 10,
        },
        searchIcon: {
          color: '#ddd',
        },
        closeIcon: {
          cursor: 'pointer',
          color: '#555',
        },
      },
    };
  }

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
    const styles = this.getStyles();

    const icons = this.state.icons.map((icon, index) => {
      return (
        <div key={index} style={styles.iconsItem} onClick={() => this.select(icon)}>
          <div
            style={
              this.state.selected && this.state.selected.name === icon.name
                ? styles.selectedBackgroundBox
                : styles.backgroundBox
            }
          ></div>
          <FontIcon style={styles.iconsItemIcon} className="material-icons">
            {icon.name}
          </FontIcon>
        </div>
      );
    });

    return (
      <MuiThemeProvider>
        <>
          <div style={styles.header.wrapper}>
            <p style={styles.header.title}>{this.props.title}</p>
            <div style={styles.header.search}>
              <FontIcon className="material-icons" style={styles.header.searchIcon}>
                search
              </FontIcon>
              <input
                type="text"
                style={styles.header.input}
                placeholder="Search"
                onChange={this.filterList.bind(this)}
              />
              {this.state.didSearch ? (
                <FontIcon
                  style={styles.header.closeIcon}
                  onClick={this.clearSearch.bind(this)}
                  className="material-icons"
                >
                  close
                </FontIcon>
              ) : null}
            </div>
          </div>
          {this.state.icons.length > 0 ? (
            <div style={styles.iconsGrid}>{icons}</div>
          ) : (
            <LinearProgress mode="indeterminate" />
          )}
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
