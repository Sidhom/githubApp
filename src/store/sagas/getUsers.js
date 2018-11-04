import axios from 'axios';
import { put } from 'redux-saga/effects'
import * as actions from '../actions/actions'

export function* getUsersSaga(action) {
    try {
        const response = yield axios.get('https://api.github.com/users')
        yield put (actions.getUsers(response.data.slice(0,6)));
    } catch (error) {
        console.log(error)
    }
}