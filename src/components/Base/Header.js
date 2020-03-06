import React from 'react';
import styled from 'styled-components';
import colors from '../../theme/colors';
import layout from '../../theme/layout';

const Header = styled.header`
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  background-color: ${colors.primary};
`
const LogoText = styled.h1`
  font-family: ${layout.fontSpecial};
  font-size: 1.6em;
  text-align: center;
  color: ${colors.background};
`
const HeaderComponent = (props) => (
  <Header>
    <LogoText>{props.title}</LogoText>
  </Header>
);

export default HeaderComponent;
