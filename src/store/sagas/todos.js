import { call, put, takeLatest } from 'redux-saga/effects';
import actions, { Types } from '../reducers/todos';
import api from '../../services/api';

export function* loadTodos({ data }) {
  const response = yield call(api.get, data);
  yield put(actions.loadSuccess(response.data));
}

const todos = [takeLatest(Types.LOAD, loadTodos)];

export default todos;
