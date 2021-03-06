import {put} from 'redux-saga/effects';
import * as LocalRepository from '../repo/LocalRepository';
import {setPlaceById, setPlacesByType} from "../actions";

export function* fetchPlaceById(action) {
    const id = action.payload;
    const place = yield LocalRepository.getPlaceById(id);
    yield put(setPlaceById(place));
}


export function* fetchPlaces(action) {
    const attractionType = action.payload;
    const places = yield LocalRepository.getPlaces(attractionType);
    yield put(setPlacesByType(places));
}


