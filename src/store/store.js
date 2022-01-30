import { combineReducers, createStore } from "redux"
import ShopReducer from "./reducers/ShopReducer"
import ThemeReducer from "./reducers/ThemeReducer"

const rootReducer = combineReducers({
  theme: ThemeReducer,
  shop: ShopReducer
})

export const store = createStore(rootReducer)