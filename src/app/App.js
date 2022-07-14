import React from "react";
import ProductsLoader from "./components/ui/hoc/productsLoader";
import { ToastContainer } from "react-toastify";
import Main from "./layouts/main";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    return (
        <>
            <ProductsLoader>
                <Main />
            </ProductsLoader>
            <div>
                <ToastContainer />
            </div>
        </>
    );
};

export default App;
