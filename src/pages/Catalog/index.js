import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import * as CartActions from '../../store/modules/cart/actions';
import api from '../../services/api';
import formatPrice from '../../utils/formatPrice';

import FloatingCart from '../../components/FloatingCart';

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
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('/products');
      setProducts(data);
    }

    loadProducts();
  }, []);

  const handleAddToCart = (id) => {
    dispatch(CartActions.addToCartRequest(id));
  };

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
                <ProductButton onPress={() => handleAddToCart(item.id)}>
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
