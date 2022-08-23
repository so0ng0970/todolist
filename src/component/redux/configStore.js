import {legacy_createStore as createStore,combineReducers} from "redux";
import todolist from "./moduls/todolist"

const rootReducer = combineReducers({todolist});

const store = createStore(rootReducer);

export default store;