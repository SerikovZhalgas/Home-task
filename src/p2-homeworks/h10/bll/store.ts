import {combineReducers, createStore, applyMiddleware} from "redux";
import {LoadingAC, loadingReducer} from './loadingReducer'
import {ThemeActionsType, themeReducer} from "../../h12/bll/themeReducer";
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store

export type AppStoreType = ReturnType<typeof reducers>
export type AppActionType = LoadingAC | ThemeActionsType

// @ts-ignore
window.store = store // for dev
