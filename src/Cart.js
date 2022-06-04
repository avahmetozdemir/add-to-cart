import React from "react";
import { useCart } from "react-use-cart";
function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  return <div>{console.warn(items)}</div>;
}

export default Cart;
