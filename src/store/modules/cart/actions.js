export const addToCartRequest = (id) => ({
  type: '@cart/ADD_REQUEST',
  id,
});

export const addToCartSucess = (product) => ({
  type: '@cart/ADD_SUCESS',
  product,
});

export const removeFromCart = (id) => ({
  type: '@cart/REMOVE',
  id,
});

export const updateAmountRequest = (id, amount) => ({
  type: '@cart/UPDATE_AMOUNT_REQUEST',
  id,
  amount,
});

export const updateAmountSucess = (id, amount) => ({
  type: '@cart/UPDATE_AMOUNT_SUCESS',
  id,
  amount,
});
