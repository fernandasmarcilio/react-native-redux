import styled from 'styled-components/native';

export const Container = styled.View`
  bottom: 0;
  position: absolute;
  background: #e84a38;
  padding: 0px 18px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CartPrincing = styled.Text`
  padding: 20px;
`;

export const CartTotalPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #f3f9ff;
`;

export const CartButton = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const CartButtonText = styled.Text`
  flex: 1;
  color: #f3f9ff;
  font-weight: bold;
  margin-left: 15px;
  margin-right: auto;
`;
