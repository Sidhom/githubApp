import { takeEvery } from 'redux-saga'

import * as actionsTypes from '../actions/actionTypes'
import { getUsersSaga } from './getUsers'

export function* watchUsers() {
    yield takeEvery (actionsTypes.INITUSERS, getUsersSaga )
}
