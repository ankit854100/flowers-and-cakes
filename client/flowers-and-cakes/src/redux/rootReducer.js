import { combineReducers } from "redux";
import ItemReducer from "./items/reducer";

const rootReducer = combineReducers({
    items: ItemReducer
});

export default rootReducer;