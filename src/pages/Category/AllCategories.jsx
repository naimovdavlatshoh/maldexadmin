import React, { useEffect, useState } from "react";
import { DeleteItem, GetData, PutData } from "../../service";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AllCategories = () => {
    const [categories, setCategories] = useState([]);
    const [status, setStatus] = useState(false);
    const [show, setShow] = useState(false);
    const [categorydata, setCategorydata] = useState(null);
    const [categoryId, setCategoryId] = useState(0);
    const [inputVal, setInputVal] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setShow(true),
            GetData(`product/category/${id}`).then((res) => {
                setCategorydata(res.data);
            });
        setCategoryId(id);
    };

    useEffect(() => {
        GetData(`product/categories/`).then((res) => {
            setCategories(res.data);
            setStatus(!status);
        });
    }, []);

    const handleUpdate = () => {
        const formdata = new FormData();
        formdata.append("name", inputVal);
        PutData(`product/category/${categoryId}/`, formdata);
    };

    const handleDelete = (id) => {
        DeleteItem(`product/category/${id}`);
    };

    return (
        <div className="container-fluid">
            {!status ? (
                <div className="w-100 d-flex justify-content-center py-5">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            ) : (
                <>
                    <div className="d-flex w-100 justify-content-between align-items-center">
                        <h3>All Categories</h3>
                        <Link to={"/create-category"}>
                            <button className="btn btn-outline-primary">
                                Add Category
                            </button>
                        </Link>
                    </div>
                    {categories?.map((category) => (
                        <div className="d-flex gap-2">
                            <Link
                                key={category?.id}
                                to={`/category/${category?.id}`}
                            >
                                <p>{category.name}</p>
                            </Link>
                            <button
                                onClick={() => handleShow(category?.id)}
                                className="btn btn-warning btn-sm"
                            >
                                edit
                            </button>
                            <button
                                onClick={() => handleDelete(category?.id)}
                                className="btn btn-danger btn-sm"
                            >
                                delete
                            </button>
                        </div>
                    ))}
                </>
            )}
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Change Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        type="text"
                        className="form-control my-3"
                        defaultValue={categorydata?.name}
                        onChange={(e) => setInputVal(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AllCategories;
