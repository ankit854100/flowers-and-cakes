import { combineReducers } from "redux";
import ItemReducer from "./items/reducer";
import UserReducer from "./users/reducer";

const rootReducer = combineReducers({
    items: ItemReducer,
    user: UserReducer
});

export default rootReducer;