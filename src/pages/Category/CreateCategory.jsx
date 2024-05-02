import React, { useState } from "react";
import { PostData } from "../../service";

const CreateCategory = () => {
    const [name, setName] = useState("");
    const addCategory = () => {
        const data = new FormData();
        data.append("name", name);
        PostData("product/categories/", data).then(() => console.log("ok"));
    };

    return (
        <div className="container w-100 py-5">
            <div className="card w-50 mx-auto">
                <div className="card-header bg-info text-light">
                    <h3>Create Category</h3>
                </div>
                <div className="card-body">
                    <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className="form-control my-3"
                    />
                    <button
                        onClick={addCategory}
                        className="btn btn-info text-light"
                    >
                        save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateCategory;
