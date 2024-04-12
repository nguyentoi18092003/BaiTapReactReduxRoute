import {get} from "../utils/request";

export const getListProduct=async()=>{
    const response =await get("products");
    // cau lenh get nay no se lay data tu duong dan ben request+products
    return response;
}

