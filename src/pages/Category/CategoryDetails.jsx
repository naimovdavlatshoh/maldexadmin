import React, { useEffect, useState } from "react";
import { GetData } from "../../service";
import { Link, useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const CategoryDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState(null);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        GetData(`product/categories/get_subcategories/${id}/`).then((res) => {
            setDetails(res.data);
            console.log(res.data);
            setStatus(!status);
        });
    }, []);
    return (
        <div>
            {!status ? (
                <div className="w-100 d-flex justify-content-center py-5">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            ) : (
                <>
                    <h3>Sub Categories</h3>
                    {details?.map((detail) => (
                        <p key={detail.id}> {detail.name}</p>
                    ))}
                </>
            )}
        </div>
    );
};

export default CategoryDetails;
