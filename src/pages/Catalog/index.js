import React, { useState } from 'react';
import { View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import formatPrice from '../../utils/formatPrice';

import FloatingCart from '../../components/FloatingCart';

import server from '../../server.json';

import {
  Container,
  ProductContainer,
  ProductList,
  Product,
  ProductImage,
  ProductTitle,
  ProductPriceContainer,
  ProductPrice,
  ProductButton,
  ProductButtonText,
} from './styles';

const Catalog = () => {
  const [products, setProducts] = useState(server.products);

  return (
    <Container>
      <ProductContainer>
        <ProductList
          data={products}
          keyExtractor={(item) => item.id}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{ height: 80 }}
          renderItem={({ item }) => (
            <Product>
              <ProductImage
                source={{ uri: item.image_url }}
                resizeMode="cover"
              />
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPriceContainer>
                <ProductPrice>{formatPrice(item.price)}</ProductPrice>
                <ProductButton>
                  <ProductButtonText>Adicionar</ProductButtonText>
                  <FeatherIcon size={30} name="plus-circle" color="#fff" />
                </ProductButton>
              </ProductPriceContainer>
            </Product>
          )}
        />
      </ProductContainer>

      <FloatingCart />
    </Container>
  );
};

export default Catalog;
