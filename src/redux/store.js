import {configureStore }from "redux"
import rootReducers from "./reducers"

const store = configureStore(rootReducers)

export default store