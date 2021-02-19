import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import formatPrice from '../../utils/formatPrice';

import {
  Container,
  CartPrincing,
  CartTotalPrice,
  CartButton,
  CartButtonText,
} from './styles';

const FloatingCart = () => {
  const navigation = useNavigation();

  const products = useSelector(({ cart }) => cart);
  const cartSize = useMemo(() => products.length || 0, [products]);

  const cartTotal = useMemo(() => {
    const cartAmount = products.reduce(
      (acc, product) => acc + product.price * product.amount,
      0
    );

    return formatPrice(cartAmount);
  }, [products]);

  return (
    <Container>
      <CartButton onPress={() => navigation.navigate('Cart')}>
        <FeatherIcon name="shopping-cart" size={24} color="#f3f9ff" />
        <CartButtonText>
          {cartSize} {cartSize === 1 ? 'item' : 'itens'}
        </CartButtonText>

        <CartPrincing>
          <CartTotalPrice>{cartTotal}</CartTotalPrice>
        </CartPrincing>

        <FeatherIcon name="chevron-right" size={24} color="#f3f9ff" />
      </CartButton>
    </Container>
  );
};

export default FloatingCart;
