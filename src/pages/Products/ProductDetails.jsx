import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetData } from "../../service";

const ProductDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [categories, setCategories] = useState(null);
    useEffect(() => {
        GetData(`product/${id}/`).then((res) => {
            setData(res.data);
            console.log(res.data);
        });
        GetData(`product/categories/`).then((res) => {
            setCategories(res.data);
        });
    }, []);
    return (
        <div className="container-fluid">
            <h2 className="my-3">{data?.name}</h2>
            <div className="d-flex justify-content-between">
                <div className="w-25">
                    <input
                        type="text"
                        defaultValue={data?.name}
                        className="form-control mb-2"
                    />
                    <input
                        type="text"
                        defaultValue={data?.article}
                        className="form-control mb-2"
                    />
                    <input
                        type="text"
                        defaultValue={data?.barcode}
                        className="form-control mb-2"
                    />
                    <input
                        type="text"
                        defaultValue={data?.brand}
                        className="form-control mb-2"
                    />
                    <input
                        type="text"
                        defaultValue={data?.code}
                        className="form-control mb-2"
                    />
                    <input
                        type="text"
                        defaultValue={data?.days}
                        className="form-control mb-2"
                    />
                    <input
                        type="text"
                        defaultValue={data?.discount_price}
                        className="form-control mb-2"
                    />
                    <input
                        type="text"
                        defaultValue={data?.material}
                        className="form-control mb-2"
                    />
                    <input
                        type="text"
                        defaultValue={data?.moq}
                        className="form-control mb-2"
                    />
                    <input
                        type="text"
                        defaultValue={data?.price}
                        className="form-control mb-2"
                    />
                    <input
                        type="text"
                        defaultValue={data?.product_size}
                        className="form-control mb-2"
                    />
                    <input
                        type="text"
                        defaultValue={data?.weight}
                        className="form-control mb-2"
                    />
                    <select name="" id="" className="form-control mb-2">
                        {categories?.map((category) => (
                            <option key={category?.id} value="">
                                {category.name}
                            </option>
                        ))}
                    </select>
                    <select name="" id="" className="form-control mb-2">
                        <option value="">{data?.price_type}</option>
                        <option value="">USD</option>
                    </select>
                    <div className="d-flex gap-5">
                        <div className="d-flex gap-2">
                            <label htmlFor="">is_new</label>
                            <input
                                type="checkbox"
                                defaultChecked={data?.is_new}
                                className="form-check-input"
                            />
                        </div>

                        <div className="d-flex gap-2">
                            <label htmlFor="">is_hit</label>
                            <input
                                type="checkbox"
                                defaultChecked={data?.is_hit}
                                className="form-check-input"
                            />
                        </div>

                        <div className="d-flex gap-2">
                            <label htmlFor="">is_popular</label>
                            <input
                                type="checkbox"
                                defaultChecked={data?.is_popular}
                                className="form-check-input mb-5"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-25">
                    {data?.images_set.map((img) => (
                        <img className="w-100" src={img.image} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
