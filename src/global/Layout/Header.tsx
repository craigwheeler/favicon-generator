import React from 'react';
import styled from 'styled-components';

import Profile from '../../assets/images/profile.png';
import VALogo from '../../assets/images/logo.png';
import Icon from '../../primitives/Icon';

const Header = (): JSX.Element => {
  return (
    <HeaderContainer>
      <div className="brand-logo">
        <img className="header-logo" src={VALogo} alt="Logo" />
        <h1 className="header-logo-text">FaviconGenerator.io</h1>
      </div>
      <div className="button-group">
        <button>
          <Icon name="bell" alt="Notifications" height={25} width={25} />
        </button>
        <button>
          <Icon name="settings" alt="Settings" height={25} width={25} />
        </button>
        <button className="profile">
          <img src={Profile} id="profile-image" alt="Profile Plaecholder" />
          <label htmlFor="profile-image">Craig Wheeler</label>
          <Icon name="down-tab" alt="Down Tab" height={10} width={10} />
        </button>
      </div>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  grid-area: header;
  background-color: #171c25;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .brand-logo {
    display: flex;
    width: 300px;
  }

  .header-logo {
    margin-left: 20px;
    max-height: 50px;
  }
  .header-logo-text {
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    margin-left: 10px;
  }

  .button-group {
    background-color: #61dafb;
    box-sizing: border-box;
    height: 100%;
    display: flex;

    button {
      padding: 10px 30px;
      border: none;
      border-right: #171c25 solid 1px;
      background-color: #171c25;
      color: #fff;

      &:hover {
        cursor: pointer;
      }
      &:focus {
        outline: 0;
        background-color: #999;
      }
    }

    .profile {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        border-radius: 50%;
        margin-right: 15px;
        height: 40px;
      }

      label {
        font-size: 12px;
      }

      svg {
        margin-left: 15px;
        margin-bottom: 3px;
      }
    }
  }
`;
