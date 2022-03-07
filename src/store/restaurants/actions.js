import { SET_RESTAURANTS, SET_RESTAURANTS_ERROR } from './actionTypes'

export const setRestaurants = (restaurants) => ({
  type: SET_RESTAURANTS,
  payload: restaurants,
})

export const setRestaurantsError = (message) => ({
  type: SET_RESTAURANTS_ERROR,
  payload: message,
})
