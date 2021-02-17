const formatPrice = (value) =>
  Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

export default formatPrice;
