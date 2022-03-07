import { createStore, compose, applyMiddleware,combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'
import restaurants from './restaurants/reducer'
import user from './user'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
  restaurants,
  user
})

const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

export default store