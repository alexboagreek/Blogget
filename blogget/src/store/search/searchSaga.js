import {apply, call, put, select, takeLatest} from 'redux-saga/effects';
import {URL_API} from '../../api/const';
import { searchRequestError, searchRequestSuccess, SEARCH_REQUEST } from './searchAction';

export function* fetchSearch(search) {
  const token = yield select(state => state.tokenReducer.token);

  try {
    const request = yield call(fetch, `${URL_API}/search?q=${search.search}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
    const response = yield apply(request, request.json);
    yield put(searchRequestSuccess(response.data));
  } catch (event) {
    yield put(searchRequestError(event));
  }
}
export function* watchSearch() {
  yield takeLatest(SEARCH_REQUEST, fetchSearch);
}
