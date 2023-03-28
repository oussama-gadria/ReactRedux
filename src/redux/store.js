import { configureStore } from "@reduxjs/toolkit";
import {persistReducer,persistStore} from "redux-persist";
import rootReducers from "./reducers";
import storage from "redux-persist/lib/storage"; 
import thunk from "redux-thunk";
const persistConfig={ 
    key:"root", 
    storage,
}
const persistedReducer=persistReducer(persistConfig,rootReducers);
export const store=configureStore({  
    reducer:persistedReducer,
    middleware:[thunk]
}); 
export const persistor=persistStore(store)