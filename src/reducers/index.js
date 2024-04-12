//1
import {combineReducers} from "redux";
//2
import { cartReducer } from "./cart";
const allReducers=combineReducers({
    //combineReducers import tu 1
    cartReducer,
    // cartReducer import tu 2
});
export default allReducers;