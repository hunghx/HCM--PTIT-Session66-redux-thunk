import { createSlice } from "@reduxjs/toolkit";
import { Book } from "../../interface";

const initBooks: Book[] = [
    
    {
        bookId: 1,
        bookName: "Book 1",
        bookPrice: 20,
        content: "Content 1",
        author: "Author 1",
        totalPages: 100,
        publicationDate: "10/10/1990",
        genre: "Genre 1",
        status: true,
        isDeleted: false
    },
    {
        bookId: 2,
        bookName: "Book 2",
        bookPrice: 20,
        content: "Content 2",
        author: "Author 2",
        totalPages: 100,
        publicationDate: "10/10/1991",
        genre: "Genre 2",
        status: true,
        isDeleted: false
    },
    {
        bookId: 3,
        bookName: "Book 3",
        bookPrice: 20,
        content: "Content 3",
        author: "Author 1",
        totalPages: 101,
        publicationDate: "10/05/1990",
        genre: "Genre 3",
        status: true,
        isDeleted: false
    }
]

export const {actions, reducer} = createSlice({
    name:'book',
    initialState:initBooks,
    reducers:{
        addBook: (state, action) => {
            const newBook : Book = {
                ...action.payload,
                bookId:10,// tự tăng,
                status: true,
                isDeleted: false,
                publicationDate: new Date().toISOString
            }
            return [...state,newBook]
        },
        removeBook: (state, action) => {  
        },
        updateBook :(state, action)=>{
        }
    }
})