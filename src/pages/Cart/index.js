import React, { useState, useMemo } from 'react';
import { View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import formatPrice from '../../utils/formatPrice';

import server from '../../serve.json';

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
  const [products, setProducts] = useState([
    {
      id: '1',
      title: 'Pizza Vegana',
      image_url:
        'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      price: 60,
      quantity: 2,
    },
    {
      id: '2',
      title: 'Macarrão Vegano',
      image_url:
        'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      price: 30,
      quantity: 1,
    },
  ]);

  const cartSize = useMemo(() => products.length || 0, [products]);

  const cartTotal = useMemo(() => {
    const cartAmount = products.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    return formatPrice(cartAmount);
  }, [products]);

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
                    <ProductQuantity>{`${item.quantity}x`}</ProductQuantity>
                    <ProductPrice>
                      {formatPrice(item.price * item.quantity)}
                    </ProductPrice>
                  </ProductPriceTotalContainer>
                </ProductPriceContainer>
              </ProductTitleContainer>

              <ActionContainer>
                <ActionButton onPress={() => {}}>
                  <FeatherIcon name="plus" color="#e84a38" size={16} />
                </ActionButton>
                <ActionButton onPress={() => {}}>
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
