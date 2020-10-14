import React from 'react';
import styled from 'styled-components';

const Footer = (): JSX.Element => {
  return <FooterContainer>2020 | FaviconGenerator.io</FooterContainer>;
};

export default Footer;

const FooterContainer = styled.footer`
  grid-area: footer;
  background-color: #171c25;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #e8e8e8;
  padding-right: 25px;
  font-size: 12px;
`;
