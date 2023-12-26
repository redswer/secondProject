import { useReducer } from 'react';
import BasketFrame from './BasketFrame';
// import { useContext } from 'react';

const defaultCartState = {
  items: [],
  totalAmount: 0,
  saleTotalPrice: 0,
};


const cartReducer = (state, action) => {
  if (action.type === 'ADD') {  // 상품 추가 했을때

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const updatedsaleTotalPrice =
      state.saleTotalPrice + action.item.salePrice * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {

      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];

      updatedItems[existingCartItemIndex] = updatedItem;

    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      saleTotalPrice: updatedsaleTotalPrice,
    };
  }

  if (action.type === 'REMOVE') {  // 상품 지울때,
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    const updatedsaleTotalPrice = state.saleTotalPrice - existingItem.salePrice;


    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };

      updatedItems = [...state.items];

      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      saleTotalPrice: updatedsaleTotalPrice,
    };
  }

  if (action.type === 'POST') {
    
  }

  return defaultCartState;
};

const BasketRudolph = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
    console.log(item);
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const resetItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'RESET', id: id })
  };

  const postItemToPayHandler = (item) => {
    dispatchCartAction({ type: 'POST', item: item });
  };

  const baskee = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    saleTotalPrice: cartState.saleTotalPrice,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    resetItem: resetItemFromCartHandler,
  };

  return (
    <BasketFrame.Provider value={baskee}>
      {props.children}
    </BasketFrame.Provider>
  );
};

export default BasketRudolph;
