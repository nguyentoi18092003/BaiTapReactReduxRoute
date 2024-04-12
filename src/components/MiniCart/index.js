// import{useSelector} from "react-redux";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
function MiniCart(){
    const cart=useSelector(state=>state.cartReducer);
    console.log(cart);
    const total=cart.reduce((sum,item)=>{
        return sum+item.quantity;
    },0)
    return (
        <>
         <Link to="/cart">Giỏ hàng({total})</Link>
        </>
    )
}
export default MiniCart;