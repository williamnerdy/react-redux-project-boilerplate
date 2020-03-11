import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import actions, { Types } from '../ducks/todos';
import api from '../../services/api';

export function* loadTodos({ data }) {
  const response = yield call(api.get, '/api/todos', data);
  yield put(actions.loadSuccess(response.data));
}

export function* exitTodos() {
  yield call(api.post, '/api/todos/exit');
  yield put(push('/exit'));
}

const todos = [
  takeLatest(Types.LOAD, loadTodos),
  takeLatest(Types.EXIT, exitTodos)
];

export default todos;
