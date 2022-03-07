import watchGetRestaurants from './restaurantsSaga'
import watchSetLike from './likesSaga'
import { all, call } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([call(watchGetRestaurants), call(watchSetLike)])
}