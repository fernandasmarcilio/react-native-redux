import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import * as CartActions from '../../store/modules/cart/actions';

import EmptyCart from '../../components/EmptyCart';

import formatPrice from '../../utils/formatPrice';

import {
  Container,
  ProductContainer,
  ProductList,
  Product,
  ProductImage,
  ProductTitleContainer,
  ProductTitle,
  ProductPriceContainer,
  ProductPriceTotalContainer,
  ProductSinglePrice,
  ProductPrice,
  ProductQuantity,
  ActionContainer,
  ActionButton,
  TotalProductsContainer,
  TotalProductsText,
  SubTotalValue,
} from './styles';

const Cart = () => {
  const dispatch = useDispatch();

  const products = useSelector(({ cart }) => cart);

  const cartSize = useMemo(() => products.length || 0, [products]);

  const cartTotal = useMemo(() => {
    const cartAmount = products.reduce(
      (acc, product) => acc + product.price * product.amount,
      0
    );
    return formatPrice(cartAmount);
  }, [products]);

  const incrementProduct = (product) => {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  };

  const decrementProduct = (product) => {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  };

  const removeProductFromCart = (id) => {
    dispatch(CartActions.removeFromCart(id));
  };

  return (
    <Container>
      <ProductContainer>
        <ProductList
          data={products}
          keyExtractor={(item) => item.id}
          listFooterComponent={<View />}
          listFooterComponentStyle={{
            height: 80,
          }}
          ListEmptyComponent={<EmptyCart />}
          renderItem={({ item }) => (
            <Product>
              <ProductImage source={{ uri: item.image_url }} />
              <ProductTitleContainer>
                <ProductTitle>{item.title}</ProductTitle>

                <ProductPriceContainer>
                  <ProductSinglePrice>
                    {formatPrice(item.price)}
                  </ProductSinglePrice>

                  <ProductPriceTotalContainer>
                    <ProductQuantity>{`${item.amount}x`}</ProductQuantity>
                    <ProductPrice>
                      {formatPrice(item.price * item.amount)}
                    </ProductPrice>
                  </ProductPriceTotalContainer>
                </ProductPriceContainer>
              </ProductTitleContainer>

              <ActionContainer>
                <ActionButton onPress={() => incrementProduct(item)}>
                  <FeatherIcon name="plus" color="#e84a38" size={16} />
                </ActionButton>
                <ActionButton
                  onPress={() => {
                    item.amount > 1
                      ? decrementProduct(item)
                      : removeProductFromCart(item.id);
                  }}
                >
                  <FeatherIcon name="minus" color="#e84a38" size={16} />
                </ActionButton>
              </ActionContainer>
            </Product>
          )}
        />
      </ProductContainer>

      <TotalProductsContainer>
        <FeatherIcon name="shopping-cart" color="#fff" size={24} />
        <TotalProductsText>
          {cartSize} {cartSize === 1 ? 'item' : 'itens'}
        </TotalProductsText>
        <SubTotalValue>{cartTotal}</SubTotalValue>
      </TotalProductsContainer>
    </Container>
  );
};

export default Cart;
