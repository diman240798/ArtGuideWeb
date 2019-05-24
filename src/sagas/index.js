import { put, takeLatest, all } from 'redux-saga/effects';
import * as actionTypes from "../actions/action_types";
import * as types from "./types";
import * as places from "./places";

function* actionWatcher() {
    yield takeLatest(actionTypes.FETCH_TYPES_LIST, types.fetchTypes);
    yield takeLatest(actionTypes.FETCH_PLACES_LIST, places.fetchPlaces);
}
export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}