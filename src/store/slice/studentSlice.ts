

// tạo ra reducer và action

import { AsyncThunkOptions, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Student } from "../../interface";


// tạo ra các action callapi : createAsynxThunks
export const getAllStudents : any = createAsyncThunk("students/getAllStudents",async() => {
    // call api ở đây
    let res = await axios.get("http://localhost:9999/students")
    return res.data;
})
// action thêm mới 
export const createStudent : any = createAsyncThunk("students/createStudent", async(data : Student) => {
    // call api thêm mới 
    let res  = await axios.post("http://localhost:9999/students",data)
    return res.data;
})
// api sửa và xóa :


const studentSlice = createSlice({
    name:'students',
    initialState:{
        data:[],
        isLoading: false
    },
    reducers: {},
    extraReducers: (builder)=>{
        // có trạng thái của 1 action thunk : pending, fulfilled , rejected  
        builder.addCase(getAllStudents.pending, (state , action)=>{
                // xử lí trong khi call api
                console.log(" đang call api ...");
                state.isLoading = true;

                
        }).addCase(getAllStudents.fulfilled,(state, action)=>{
            // call api thành công 
            console.log("call api thành công");
            console.log(action.payload);
            state.isLoading = false;
            state.data = action.payload;
        }).addCase(getAllStudents.rejected,(state, action)=>{
            console.log("rejected ");
            console.log(action);
        })  
        builder.addCase(createStudent.pending, (state , action)=>{
                // xử lí trong khi call api
                console.log(" đang call api ...");
                
        }).addCase(createStudent.fulfilled,(state, action)=>{
            // call api thành công 
            console.log("call api thành công");
            console.log(action.payload);
            const newStudent = action.payload as never;
            state.data = [...state.data, newStudent]

        }).addCase(createStudent.rejected,(state, action)=>{
            console.log("rejected ");
            console.log(action);
        })  
    }
})
export const {reducer} = studentSlice;

