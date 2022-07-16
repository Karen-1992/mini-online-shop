import React from "react";
import ProductsLoader from "./components/ui/hoc/productsLoader";
import { ToastContainer } from "react-toastify";
import Main from "./layouts/main";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    return (
        <div className="container-xxl shadow">
            <ProductsLoader>
                <Main />
            </ProductsLoader>
            <div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default App;
