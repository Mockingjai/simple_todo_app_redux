import todos from './appReducer';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todos,
});
export default rootReducer;