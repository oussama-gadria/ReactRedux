import { combineReducers } from "@reduxjs/toolkit";
import products from "../redux/slices/productsSlice"
const reducers=combineReducers({ 
    products
})
export default reducers; 
