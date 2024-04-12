import {useEffect,useState} from "react";
//1
import { getListProduct } from "../../services/productsService";
import "./Product.css";
import ProductItem from "./ProductItems";
function ProductList(){
    const [products,setProducts]=useState([]);
    //khai bao product rong
    useEffect(()=>{
        const fetchApi=async ()=>{
            //getListProduct dc import tu 1
            const response= await getListProduct();
            // set lai mang product =data chung ta nhan dc
            setProducts(response);
        }
        fetchApi();
    },[]);
    console.log(products);
    return (
        <>
            <div className="product_list">
                {products.map(item=>(
                    <ProductItem item={item} key={item.id}/>
                    // item truyeenf qua file ProducItems.js
                ))}
            </div>
        
        </>
    )
}
export default ProductList