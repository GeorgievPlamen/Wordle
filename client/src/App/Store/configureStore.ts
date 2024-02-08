import { createStore } from "redux";
import letterReducer from "../../Features/Keyboard/letterReducer";

export function configureStore() {
    return createStore(letterReducer);
}