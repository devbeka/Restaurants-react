import { takeEvery, put, takeLatest, call, select } from "@redux-saga/core/effects"
import { setLike } from "../store/user/actions";

const getLikes = () => fetch('http://localhost:3000/usersReg/0')
const setLikes = (currentLikes) => fetch('http://localhost:3000/usersReg/0', {
  method: 'PATCH',
  body: JSON.stringify({
    likedRestaurants: currentLikes
  }),
  headers: { 'Content-type': 'application/json' }
})


function* setLikeGen() {
  try {
    const currentLikes = yield select(state => state.user.likedRestaurants)
    yield call(setLikes, currentLikes)
  }
  catch (e) { }
}

function* getLikeGen() {
  try {
    const response = yield call(getLikes)
    const user = yield response.json();
    yield put(setLike(user.likedRestaurants))
  }
  catch (e) { }
}


export default function* watchSetLike() {
  yield takeEvery('SET_LIKE_SAGA', setLikeGen)
  yield takeLatest('GET_LIKE_SAGA', getLikeGen)
}
