import { all, takeLatest, select, call, put } from 'redux-saga/effects';

import api from '../../../services/api';
import formatPrice from '../../../utils/formatPrice';
import { addToCartSucess, updateAmountSucess } from './actions';

function* addToCart({ id }) {
  const productExists = yield select((state) =>
    state.cart.find((product) => product.id === id)
  );

  const currentAmount = productExists ? productExists.amount : 0;
  const amount = currentAmount + 1;

  if (productExists) {
    // dispatch action to att quantity of the product in cart
    yield put(updateAmountSucess(id, amount));
  } else {
    // add product in cart
    const response = yield call(api.get, `products/${id}`);
    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSucess(data));
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;
  yield put(updateAmountSucess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
