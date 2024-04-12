import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { updateItem } from "../../actions/cart";
import { deleteItem } from "../../actions/cart";
import { deleteAllItem} from "../../actions/cart";

function Cart(){
    const cart=useSelector(state=> state.cartReducer);
    const totalMoney=cart.reduce((sum,item)=>{
        const percent=item.info.discountPercentage.toFixed(0);
        const priceNew=(item.info.price*(100-percent)/100).toFixed(0);
        return sum+priceNew*item.quantity;
    
   },0)
   const dispatch=useDispatch();
   const handleDown=(id,quantity)=>{
    if(quantity>1)
    dispatch(updateItem(id,-1));
   }
   const handleUp=(id)=>{
    dispatch(updateItem(id,1));
   }
   const handleDelete=(id)=>{
    dispatch(deleteItem(id));
   }
   const handleDeleteAll=(id)=>{
    dispatch(deleteAllItem(id));
   }
    return (
        <>
            <h2>Giỏ hàng</h2>
            {cart.length>0 ?(
                <div className="cart">
                    <div className="cart_delete-all">
                       <button onClick={handleDeleteAll}>Xóa tất cả</button> 
                    </div>
                    <div className="cart_list">
                    
                        {cart.map((item)=>{
                            const percent=item.info.discountPercentage.toFixed(0);
                            const priceNew=(item.info.price*(100-percent)/100).toFixed(0);
                            return (
                                (
                                    <div className="cart_item">
                                        <div className="cart_image">
                                            <img src="https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-vang-thumb-600x600.jpg" alt={item .info.title}/>
                                        </div>
                                        <div className="cart_info">
                                            <div className="cart_title">{item.info.title}
                                            </div>
                                            <div className="cart_price-new">{priceNew}$
                                            </div>
                                            <div className="cart_price-old">{item.info.price}
                                            </div>
                                        </div>
                                        <div className="cart_quantity">
                                            <button onClick={()=>handleDown(item.id,item.quantity)}>-</button>
                                            <div className="cart_number">{item.quantity}</div>
                                            <button onClick={()=>handleUp(item.id)}>+</button>
                                        </div>
                                        <button onClick={()=>handleDelete(item.id)}>
                                            Xóa
                                        </button>
                                    </div>
                                )
                            )
                        }
                        )}
                    </div>
                    <div className="cart_total">Tổng tiền: {totalMoney}$</div>  
                </div>
            ) : (
                <>Chưa có sản phẩm trong giỏ hàng</>
            )}
        </>
    );
}
export default Cart;