import React from 'react';
import { useNavigation } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {
  Container,
  CartPrincing,
  CartTotalPrice,
  CartButton,
  CartButtonText,
} from './styles';

const FloatingCart = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <CartButton onPress={() => navigation.navigate('Cart')}>
        <FeatherIcon name="shopping-cart" size={24} color="#f3f9ff" />
        <CartButtonText>2 itens</CartButtonText>

        <CartPrincing>
          <CartTotalPrice>R$ 200,00</CartTotalPrice>
        </CartPrincing>

        <FeatherIcon name="chevron-right" size={24} color="#f3f9ff" />
      </CartButton>
    </Container>
  );
};

export default FloatingCart;
