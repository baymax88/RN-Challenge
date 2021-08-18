import {createStore, applyMiddleware, combineReducers} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {all} from 'redux-saga/effects'

import {watchFetchBuddies, reducer as buddyReducer} from './buddies'
import {watchFetchTodayMedications, reducer as todayMedicationsReducer} from './todayMedications'

function* rootSaga() {
  yield all([
    watchFetchBuddies(),
    watchFetchTodayMedications()
  ])
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers({
    buddies: buddyReducer,
    todayMedications: todayMedicationsReducer
  }),
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store