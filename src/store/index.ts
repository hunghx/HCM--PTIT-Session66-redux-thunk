
import {reducer as bookReducer} from "./slice/bookSlice"
import {reducer as orderReducer} from "./slice/bookOrderSlice"
import {configureStore } from "@reduxjs/toolkit";
import { reducer } from "./slice/studentSlice";




// cấu hình store
const store = configureStore({
    reducer:{
        student : reducer,
        book : bookReducer,
        order : orderReducer,
        //... thêm reducer cho các slice còn lại
    }
})
export default store;
export type AppDispatch = typeof store.dispatch;