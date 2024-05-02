import axios from "axios";
const BASE_URL = "http://5.35.82.80:8000/";

export const GetData = async (url) => {
    const response = await axios.get(BASE_URL + url);
    return response;
};

export const PostData = async (url, data) => {
    const response = await axios.post(BASE_URL + url, data, {
        headers: {
            "Content-Type": "multipart/formdata",
        },
    });
    return response;
};

export const PutData = async (url, data) => {
    const response = await axios.put(BASE_URL + url, data, {
        headers: {
            "Content-Type": "multipart/formdata",
        },
    });
    return response;
};

export const DeleteItem = async (url) => {
    await axios.delete(BASE_URL + url);
};
