import {put, takeEvery} from 'redux-saga/effects'

import * as API from '../api'

export function* watchFetchBuddies() {
  yield takeEvery('FETCH_BUDDIES', lookupBuddies)
}

function* lookupBuddies() {
  const buddies = yield API.fetchBuddies()
  const buddiesWithAdherence = yield getBuddyAdherence(buddies)
  yield put({type: 'SET_BUDDIES', payload: buddiesWithAdherence})
}

async function getBuddyAdherence(buddies) {
  for (let buddy of buddies) {
    const adherence = await API.fetchMedicationAdherence(buddy.id)
    buddy.adherence = adherence
  }
  return buddies
}

export function reducer (state=[], action) {
  switch (action.type) {
    case 'SET_BUDDIES':
      return action.payload
    default:
      return state
  }
}