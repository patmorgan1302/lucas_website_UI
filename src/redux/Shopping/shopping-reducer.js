import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {

  products: [
    {
      id: 1,
      title: "Screaming Heads Print-Out",
      description:
        "Custom printout of one of our most popular sellers",
      price: 15.0,
      image:
      require('./lucas_product_2.jpg'),
    },
    {
      id: 2,
      title: "Snake Boi",
      description:
      "Custom printout of one of our most popular sellers",
      price: 15.0,
      image:
        require('./lucas_product_1.jpg'),
    },
    {
      id: 3,
      title: "A Whole Slew of Print-outs",
      description:
      "Custom printout of one of our most popular sellers",
      price: 60.0,
      image:
        require('./lucas_product_3.jpg'),
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
