import React, { useEffect, useState } from "react";
import { GetData } from "../../service";
import { Link } from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        GetData(`product/all`).then((res) => {
            setProducts(res.data);
        });
    }, []);

    return (
        <div className="container-fluid">
            <div className="cards-box d-flex flex-wrap w-100 ">
                {products?.map((product) => (
                    <div key={product.id} className="p-3 w-25">
                        <div className="card w-100 p-3">
                            {product?.images_set[0]?.image ? (
                                <img
                                    src={product?.images_set[0]?.image}
                                    className="w-100 h-75  contain mb-3"
                                    alt=""
                                />
                            ) : (
                                <img
                                    src={product?.images_set[0]?.image_url}
                                    className="w-100 h-75  contain mb-3"
                                    alt=""
                                />
                            )}
                            <p className="text-info fs-4">
                                {product.name.length > 20
                                    ? product.name.slice(0, 20) + "..."
                                    : product.name}
                            </p>
                            <Link
                                to={`/product/${product.id}`}
                                className="btn btn-outline-primary w-50"
                            >
                                view more
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
