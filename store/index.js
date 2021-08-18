import {createStore, applyMiddleware, combineReducers} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {all} from 'redux-saga/effects'

import {watchFetchBuddies, reducer as buddyReducer} from './buddies'

function* rootSaga() {
  yield all([
    watchFetchBuddies()
  ])
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers({buddies: buddyReducer}),
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store