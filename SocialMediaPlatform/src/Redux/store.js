import {applyMiddleware, combineReducers, compose, legacy_createStore} from "redux"
import thunk from "redux-thunk";
import { UserReducer } from "./Users/User.reducer";
import { PostReducer } from "./Posts/Post.reducer";

let  RootReducers=combineReducers({
user:UserReducer,
post:PostReducer
})

const createComposer= compose;

export const store = legacy_createStore(RootReducers, createComposer(applyMiddleware(thunk)));