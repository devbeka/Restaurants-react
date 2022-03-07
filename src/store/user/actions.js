import { SET_LIKE } from "./actionTypes";

export const setLike = (id) => ({
  type: SET_LIKE,
  payload: id
})