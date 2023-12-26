import { createContext } from 'react';

const sleighFrame = {
  items: [],
  totalAmount: 0,
  saleTotalPrice: 0,
  addItem: (item) => { },
  removeItem: (id) => { },
  reetItem: () => { },
  postItem: (a) => {

  }
}
const BasketFrame = createContext(sleighFrame);

export default BasketFrame;