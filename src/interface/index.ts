


export interface Book {
    bookId: number,
    bookName  : string ,
    bookPrice : number,
    content : string,
    author : string,
    totalPages :number,
    publicationDate : string,
    genre : string,
    status : boolean,
    isDeleted : boolean
}


export interface OrderBook {
    id : string,
    bookId : number,
    borrowedAt : string,
    borrowedTime : number,
    returnedAt : string,
    status : boolean,
    customerName : string,
    customerPhone : string,
    customerAddress: string,
    totalPrice : number
}

export interface Student{
    id: number,
    name : string,
    dob : string,
    address : string,
    classId : string,
    gender : boolean,
    phone : string
}

export type StateType = {
    book : Book[],
    order : OrderBook[]
}