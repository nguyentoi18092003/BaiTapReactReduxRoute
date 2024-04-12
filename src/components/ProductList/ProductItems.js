//1
import {useDispatch,useSelector} from "react-redux"
//2
import {addToCart, updateItem} from "../../actions/cart";
function ProductItem(props){
    const {item}=props;
    // nhan dci item tu file ben kia thong qua pros
    const percent=item.discountPercentage.toFixed(0);
    const priceNew=(item.price*(100-percent)/100).toFixed(0);
    // xu li locgic may cai cong tru nhan chia thoi
    //*2
    const cart=useSelector(state=> state.cartReducer);
    // cartReducer la ham trong reducer vao kho tong lay du lieu ra
    //useSeclectorAll duoc import tu 1 phan cua 1
    
    //*1
    const dispatch = useDispatch();
    //muon su dung useDispatch import cai 1 vao
    const handleAddToCart=()=>{
        const exitsCart=cart.some(i=>{
            //cart tu*2, some lap qua tung phan tu
            return i.id===item.id;
        });
        console.log(exitsCart);
        if(exitsCart){
            dispatch(updateItem(item.id,1))
            //updateItemimport tu 2
        }
        else{
            dispatch(addToCart(item.id,item));
        }
        // dispatch(addToCart(item.id,item));// dispatch la ham *1 o tren
        //ham addToCart () dc import tu 2
        // chung ta gui qua cho file action 2 thong tin item.id va item
    }

    return (
        <>
                            <div className="product_item" >
                        <div className="product_image">
                            <img src="https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-vang-thumb-600x600.jpg" alt={item.title}/>
                            {/* src={item.thumnail} */}

                        </div>
                        <div className="product_content">
                        <div className="product_title">
                            {item.title}
                        </div>
                        <div className="product_price-new">
                            {priceNew}$
                        </div>
                        <div className="product_price-old">
                            {item.price}$
                        </div>
                        <div className="product_percent">
                            {percent}%
                        </div>
                        {/* //test */}
                        <button onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
                    </div>
                    </div>
        </>
    )

}
export default ProductItem;