import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const ProductContainer = styled.View`
  flex: 1;
  flex-direction: row;
  margin-top: 40px;
  border-radius: 5px;
  margin-bottom: 20%;
`;

export const ProductList = styled.FlatList.attrs({ numColumns: 1 })`
  flex: 1;
  padding: 40px 20px;
`;

export const Product = styled.View`
  flex: 1;
  margin: 8px;
  padding: 32px 12px;
  border-radius: 25px;
  background: #f3f3f3;
`;

export const ProductImage = styled.Image`
  width: 90%;
  height: 200px;
  border-radius: 10px;
  align-self: center;
`;

export const ProductTitle = styled.Text`
  font-size: 22px;
  margin-top: 10px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 3.5px;
  text-align: center;
`;

export const ProductPriceContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding: 24px 32px 4px;
`;

export const ProductPrice = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;
// #f18b22
// #e84a38;
export const ProductButton = styled.TouchableOpacity`
  background: #e84a38;
  padding: 4px 8px;
  border-radius: 100px;
  align-items: center;
  flex-direction: row;
`;

export const ProductButtonText = styled.Text`
  color: #fff;
  font-weight: 800;
  padding: 0 4px;
  font-size: 14px;
  text-transform: uppercase;
`;
