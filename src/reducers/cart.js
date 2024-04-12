export const cartReducer=(state=[],action)=>{
    let newState=[...state];
    switch(action.type){
        case "ADD_TO_CART":
            return [
                ...newState,
                {
                    id:action.id,
                    quantity:1,
                    info:action.info
                }
            ];
            case "UPDATE_ITEM":
                const itemUpdate=newState.find(item=> item.id===action.id);
                itemUpdate.quantity=itemUpdate.quantity+action.step;
                return newState;
            case "DELETE_ITEM":     
                newState=newState.filter(item=>item.id!==action.id);
                return newState;
            case "DELETE_ALL_ITEM":     
                
                return [];
            
            default:
                return state;
    }
}