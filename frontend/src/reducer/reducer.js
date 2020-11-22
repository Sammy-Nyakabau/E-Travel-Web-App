/* eslint-disable */
export const initialState = {
  listings: [],
  allListings: [],
  wishlist: [],
  user: null,
  search: false,
  item: {},
};

// Selector
//   export const getBasketTotal = (basket) =>
//     basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist, action.item],
      };

    case "SET_LISTINGS":
      return {
        ...state,
        listings: [...action.items],
      };
    
      case "SET_ALL_LISTINGS":
      return {
        ...state,
        allListings: [...action.items],
      };

    case "SET_SEARCH":
      return {
        ...state,
        search: action.search,
      };

    case "SET_WISHLIST":
      return {
        ...state,
        wishlist: [...action.items],
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "EMPTY_WISHLIST":
      return {
        ...state,
        wishlist: [],
      };

    case "REMOVE_FROM_WISHLIST":
      let newIndex = state.wishlist.findIndex(
        (wishlistItem) => wishlistItem.id === action.id
      );
      let newWishlist = [...state.wishlist];

      if (newIndex >= 0) {
        newWishlist.splice(newIndex, 1);
      }
      return {
        ...state,
        wishlist: newWishlist,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
