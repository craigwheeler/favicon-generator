import React from 'react';
import styled from 'styled-components';

const Footer = (): JSX.Element => {
  return <FooterContainer>2020 | Some kinda footer information</FooterContainer>;
};

export default Footer;

const FooterContainer = styled.footer`
  grid-area: footer;
  background-color: #171c25;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #fff;
  padding-right: 25px;
  font-size: 12px;
`;
