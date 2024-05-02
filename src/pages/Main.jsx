import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
    return (
        <div className="w-100 py-2 px-5 d-flex gap-3">
            <Link to={"/categories"}>
                <button className="btn btn-primary">Categories</button>
            </Link>
            <Link to={"/products"}>
                <button className="btn btn-primary">Products</button>
            </Link>
        </div>
    );
};

export default Main;
