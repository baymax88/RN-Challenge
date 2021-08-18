import {put, takeEvery} from 'redux-saga/effects'

import * as API from '../api'

export function* watchFetchTodayMedications() {
  yield takeEvery('FETCH_TODAY_MEDICATIONS', lookupTodayMedications)
}

function* lookupTodayMedications() {
  const todayMedications = yield API.fetchTodaysMedication()
  yield put({type: 'SET_TODAY_MEDICATIONS', payload: todayMedications})
}

export function reducer (state=[], action) {
  switch (action.type) {
    case 'SET_TODAY_MEDICATIONS':
      return action.payload
    default:
      return state
  }
}