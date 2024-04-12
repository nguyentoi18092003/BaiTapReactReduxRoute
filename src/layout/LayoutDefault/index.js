import{Link,Outlet}from "react-router-dom";
import "./LayoutDefault.css";
import MiniCart from "../../components/MiniCart";

function LayoutDefault(){
    return(
        <>
            <header className="header">
                <div className="header_logo">
                    <Link to="/">Logo</Link>
                </div>
                <div className="header-cart">
                   <MiniCart/>
                </div>
            </header>
            <main className="main">
                <Outlet/>
            </main>
            <footer className="footer">
                Copyright @2023 by 28Tech
            </footer>
        </>
    )
}
export default LayoutDefault;