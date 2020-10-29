import React from 'react';
import device from '../device';
import styled from 'styled-components';
import Icon from '../../primitives/Icon';

import { Link } from 'react-router-dom';

const SideNav = (): JSX.Element => {
  return (
    <NavContainer>
      <div className="nav-group">
        <button>
          <Icon name="queues" height={20} width={20} alt="Icon" />
          <Link to="/">Home</Link>
        </button>
        <button>
          <Icon name="dashboard" height={20} width={20} alt="Icon" />
          <Link to="/favicon-generator">Favicon</Link>
        </button>
        <button>
          <Icon name="help" height={20} width={20} alt="Icon" />
          Help
        </button>
      </div>
    </NavContainer>
  );
};

export default SideNav;

const NavContainer = styled.aside`
  grid-area: sidebar;
  background-color: #171c25;
  display: flex;
  align-items: center;

  .nav-group {
    display: flex;
    height: 100%;
    list-style: none;
    margin: 0;
    justify-content: space-between;
    width: 100%;

    button {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #171c25;
      color: #e8e8e8;

      &:hover {
        cursor: pointer;
      }
      &:focus {
        outline: 0;
        background-color: #999;
        color: #222;
      }
    }
  }

  @media (${device.tablet}) {
    align-items: center;
    border: #171c25 solid 1px;
    border-top: none;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    left: 0;
    padding-top: 25px;

    .nav-group {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding: 0;

      button {
        justify-content: flex-start;
        flex-direction: row;
        width: 100%;
        border: none;
        justify-content: left;
        padding: 12px 0px 12px 20px;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 1px;
        svg {
          margin-right: 10px;
        }
        &:focus {
          background-color: #4c5cff85;
          color: #fff;
        }
      }
    }
  }
`;
