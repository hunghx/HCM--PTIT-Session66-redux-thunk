
import { useEffect } from 'react';
import './App.css'
import Book from './pages/Book'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { createStudent, getAllStudents } from './store/slice/studentSlice';
import { Student } from './interface';

function App() {
const dispatch = useDispatch();

  useEffect(()=>{
      // console.log("tiến hành dispatch action lấy danh sách sinh viên");
      // dispatch(getAllStudents());
      // them mới 
      const newStudent: Student = {
        id: 1,
        name:"Tâm Anh",
        address:"bình thạnh",
        gender: true,
        phone:"0998784734",
        classId:"KS2023A",
        dob:"2005-11-20"
      } 
      dispatch(createStudent(newStudent))
  },[])
  return (
    <>
      {/* <Book/> */}
    </>
  )
}

export default App
