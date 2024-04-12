export const addToCart=(id,info)=>{
    //id,info dc gui tu file comopenet qua thogn qua dispath
    return {
        type:"ADD_TO_CART",
        id:id,
        info:info


    };
}
export const updateItem=(id,step)=>{
    //id,info dc gui tu file comopenet qua thogn qua dispath
    return {
        type:"UPDATE_ITEM",
        id:id,
        step:step


    };
}
export const deleteItem=(id)=>{
    //id,info dc gui tu file comopenet qua thogn qua dispath
    return {
        type:"DELETE_ITEM",
        id:id
    };
}
export const deleteAllItem=()=>{
    //id,info dc gui tu file comopenet qua thogn qua dispath
    return {
        type:"DELETE_ALL_ITEM",
        
    };
}