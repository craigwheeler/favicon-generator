import React, { useState } from 'react';
import device from '../device';
import styled, { css } from 'styled-components';
import Icon from '../../primitives/Icon';

import { Link } from 'react-router-dom';

const SideNav = (): JSX.Element => {
  const [active, setActive] = useState('home');
  return (
    <NavContainer>
      <div className="nav-group">
        <StyledLink
          className="border-top border-bottom"
          to="/"
          isActive={active === 'home'}
          onClick={() => setActive('home')}
        >
          <Icon name="queues" height={20} width={20} alt="Icon" />
          Home
        </StyledLink>
        <StyledLink
          className="border-bottom"
          to="/favicon-generator"
          isActive={active === 'favicon'}
          onClick={() => setActive('favicon')}
        >
          <Icon name="dashboard" height={20} width={20} alt="Icon" />
          Favicon Generator
        </StyledLink>

        {/* TODO: add help link */}
        {/* <StyledLink className="border-bottom" to="/" isActive={active === 'help'} onClick={() => setActive('help')}>
          <Icon name="help" height={20} width={20} alt="Icon" />
          Help
        </StyledLink> */}
      </div>
    </NavContainer>
  );
};

export default SideNav;

const StyledLink = styled(Link)<{ isActive: boolean }>`
  display: flex;
  justify-content: left;
  align-items: center;
  color: #e8e8e8;
  padding: 15px 10px;
  text-decoration: none;

  svg {
    margin: 0 10px;
  }

  &:hover {
    cursor: pointer;
    background-color: #4c5cff85;
  }

  ${({ isActive }: { isActive: boolean }) =>
    isActive &&
    css`
      outline: 0;
      background-color: #4c5cff85;
      color: #fff;
    `}
`;

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
    .border-top {
      border-top: 1px solid rgba(255, 255, 255, 0.1);=
    }
    .border-bottom {
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
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

    .nav-group {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding: 0;
    }
  }
`;
