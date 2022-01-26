import { combineReducers, createStore } from "redux"
import ThemeReducer from "./reducers/ThemeReducer"

const rootReducer = combineReducers({
  theme: ThemeReducer
})

export const store = createStore(rootReducer)