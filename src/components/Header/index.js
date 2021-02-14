import React from 'react';

import { Container, Image } from './styles';

import Logo from '../../assets/logo.png';

const Header = () => (
  <Container>
    <Image source={Logo} />
  </Container>
);

export default Header;
