import { SET_LIKE } from "./actionTypes";

const initialState = {
  isAuth: false,
  likedRestaurants: [],
  name: "Нурсултан",
  password: "1234567890",
  email: "kurbanof.atabek@gmail.com"
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_LIKE: {
      const isLiked = state.likedRestaurants.includes(action.payload)
      const likeItems = isLiked ? state.likedRestaurants.filter(id => id !== action.payload) : [...state.likedRestaurants, action.payload]

      return {
        ...state,
        likedRestaurants: Array.isArray(action.payload) ? action.payload : likeItems
      }
    }
    default: return state
  }
}