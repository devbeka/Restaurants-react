import { SET_RESTAURANTS } from "./actionTypes";

const initialState = {
  items: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_RESTAURANTS: return {
      ...state, items: action.payload
    }
    default: return state
  }
}