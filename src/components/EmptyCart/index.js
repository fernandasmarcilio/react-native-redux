import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { Container, EmptyCartText } from './styles';

const EmptyCart = () => (
  <Container>
    <FeatherIcon name="slash" size={38} color="#f3f9ff" />
    <EmptyCartText>Seu carrinho está vazio</EmptyCartText>
  </Container>
);

export default EmptyCart;
