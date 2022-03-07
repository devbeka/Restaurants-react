import { takeLatest, put, call } from 'redux-saga/effects'
import { setRestaurants, setRestaurantsError } from '../store/restaurants/actions'

const fetchData = () => fetch('http://localhost:3000/restaraunts')

function* getRestaurants() {
  try {
    const response = yield call(fetchData)
		const json = yield response.json()
    yield put(setRestaurants(json))
  }
  catch (e) {
    yield put(setRestaurantsError(e.message))
  }
}

export default function* watchGetRestaurants() {
  yield takeLatest('GET_RESTAURANTS',getRestaurants)
}