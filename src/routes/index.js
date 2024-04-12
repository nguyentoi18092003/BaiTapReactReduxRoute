import LayoutDefault from "../layout/LayoutDefault";
import Home from "../pages/Home";
import Cart from "../pages/Cart";

export const routes=[
    {
        path:"/",
        element: <LayoutDefault/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"cart",
                element:<Cart/>
            }
        ]
    }
]