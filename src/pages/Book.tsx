
import { Button, Container, Form, Modal, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Book as BookType, StateType } from '../interface'
import React, { useState } from 'react'
import { AppDispatch } from '../store'
import { actions } from '../store/slice/bookSlice'

const Book = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [book, setBook] = useState<BookType>({});
    const dispatch = useDispatch<AppDispatch>();

    const onchange=(e : React.ChangeEvent<HTMLInputElement>)=>{
        let name = e.target.name;
        let value = e.target.value;
        setBook({...book, [name]: value})

    }
    const handleSubmit = (e : React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        // chuyển dữ liệu sang store
        //...

        // gửi dữ liệu lên store : hook useDispatch
        dispatch(actions.addBook(book))
    }
    // hiển thị:
    // B1 : lấy dữ liệu từ store - sử dụng hook useSelector()
    const books: BookType[] = useSelector((state: StateType) => state.book)

    // 
    // B2 : dùng map() để hiển thị  
    return (
        <>
            <div>
                <Container className="text-center">
                    <h1 className="mb-4">Quản lý sản phẩm</h1>
                    <Button
                        variant="primary"
                        className="mb-4"
                        onClick={() => setIsOpen(true)}

                    >
                        Thêm mới sản phẩm
                    </Button>
                    <div className="mb-4 ">
                        <Form.Select

                        >
                            <option value="all">Tất cả</option>
                            <option value="returned">Đã trả</option>
                            <option value="notReturned">Chưa trả</option>
                        </Form.Select>
                    </div>
                    <Table striped bordered hover className="mx-auto">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên</th>
                                <th>Giá</th>
                                <th>Tên tác giả</th>
                                <th>Ngày xuất bản</th>
                                <th>Trạng thái</th>
                                <th colSpan={2}>Chức năng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map((book, index) => <tr key={book.bookId}>
                                <td>{index + 1}</td>
                                <td>{book.bookName}</td>
                                <td>
                                    {book.bookPrice} $
                                </td>
                                <td>{book.author}</td>
                                <td>{book.publicationDate}</td>
                                <td>
                                    {book.status ? "Chưa mượn" : "Đang mượn"}
                                </td>
                                <td>
                                    <Button
                                        variant="danger"
                                        className="me-2"

                                    >
                                        Xóa
                                    </Button>

                                </td>
                                <td>
                                    <Button variant="warning">
                                        Sửa
                                    </Button>
                                </td>
                            </tr>)}
                        </tbody>
                    </Table>
                    <Modal show={isOpen}>
                        <Modal.Header closeButton>
                            <Modal.Title>
                                Thêm mới sách
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Tên</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Nhập tên sản phẩm"
                                        name="bookName"
                                        value ={book.bookName}
                                        onChange={onchange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Giá</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="bookPrice"
                                        value ={book.bookPrice}
                                        onChange={onchange}

                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Tổng số trang</Form.Label>
                                    <Form.Control
                                        type="number"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Nội dung</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="content"
                                        value ={book.content}
                                        onChange={onchange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Thể loại</Form.Label>
                                    <Form.Control
                                        type="text"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>tác giả</Form.Label>
                                    <Form.Control
                                        type='text'
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" >
                                Đóng
                            </Button>
                            <Button variant="primary" >
                                Thêm mới sản phẩm
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Container>
            </div>
        </>
    )
}

export default Book
