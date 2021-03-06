import {combineReducers} from 'redux'
import Types from "./types";
import Places from "./places";
import Map from "./map";
import FullPage from "./fullpage";

const rootReducer = combineReducers({
    types: Types,
    places: Places,
    map: Map,
    fullpage: FullPage
});

export default rootReducer;