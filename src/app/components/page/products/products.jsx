import React, { useEffect, useState } from "react";
import {
    getFilterProductsTypesList,
    getProducts
} from "../../../store/products";
import {
    addProductToCart,
    getCartListQuantity,
    getCartStatus,
    toggleCart
} from "../../../store/cart";
import { useSelector, useDispatch } from "react-redux";
import CartToggleButton from "../../common/cartToggleButton";
import Pagination from "../../common/pagination";
import { paginate } from "../../../utils/paginate";
import PageFormSwitcher from "../../common/pageFormSwitcher";
import SelectField from "../../common/selectField";
import ProductsGrid from "../../ui/productsGrid";
import ProductList from "../../ui/productsList";
import GroupList from "../../common/groupList";
import pageForms from "../../../constants/pageForms.json";

const Products = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState({
        pageSize: 10
    });
    const [selectedFilterTypes, setSelectedFilterTypes] = useState([]);
    const [pageFormType, setPageFormType] = useState(pageForms[0].name);
    const dispatch = useDispatch();
    const products = useSelector(getProducts());
    const filterTypes = useSelector(getFilterProductsTypesList());
    const cartQuantity = useSelector(getCartListQuantity());
    const isCartOpen = useSelector(getCartStatus());
    const handleTogglePageForm = (name) => {
        setPageFormType(name);
    };
    const handleAddToCart = (data) => {
        const newData = {
            ...data,
            quantity: 1
        };
        dispatch(addProductToCart(newData));
    };
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const handleToggleCart = () => {
        dispatch(toggleCart());
    };
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: +target.value
        }));
        setCurrentPage(1);
    };
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedFilterTypes]);
    const handleFilterTypesSelect = (item) => {
        const itemIndex = selectedFilterTypes.findIndex(el => el.NAME === item.NAME);
        if (itemIndex !== -1) {
            setSelectedFilterTypes(prevState => prevState.filter(el => el.NAME !== item.NAME));
        } else {
            setSelectedFilterTypes(prevState => (
                [
                    ...prevState,
                    item
                ]
            ));
        }
    };
    const clearFilter = () => {
        setSelectedFilterTypes([]);
    };
    function filterProducts(data) {
        const filteredProducts = selectedFilterTypes
            ? data.filter(product => selectedFilterTypes.every(t => t.NAME === product[t.TYPE]))
            : data;
        return filteredProducts;
    }
    const filteredProducts = filterProducts(products);
    const count = filteredProducts.length;
    function getPageSizeOptions() {
        const optionsArr = [];
        const optionsQuantity = Math.ceil(count / 10);
        for (let i = 1; i <= optionsQuantity; i++) {
            optionsArr.push({
                label: 10 * i,
                value: 10 * i
            });
        }
        return optionsArr;
    }
    const productsCrop = paginate(filteredProducts, currentPage, data.pageSize);
    const pageSizeOptions = getPageSizeOptions();
    return (
        <div className="d-flex">
            <div className="position-relative">
                <CartToggleButton
                    value={cartQuantity}
                    onToggle={handleToggleCart}
                />
                <div
                    className={
                        "products-container" + (!isCartOpen ? "-100" : "")
                    }
                >
                    <div className="d-flex flex-wrap justify-content-between p-2">
                        <SelectField
                            label="Показывать по"
                            options={pageSizeOptions}
                            name="pageSize"
                            onChange={handleChange}
                            value={data.pageSize}
                        />
                        <button
                            className="btn btn-secondary h-25 mt-2"
                            onClick={clearFilter}
                        >
                            {" "}
                            Очистить фильтр
                        </button>
                        <PageFormSwitcher
                            forms={pageForms}
                            onTogglePageForm={handleTogglePageForm}
                            activeForm={pageFormType}
                        />
                    </div>
                    <div className="d-flex justify-content-between p-2">
                        <GroupList
                            selectedItems={selectedFilterTypes}
                            items={filterTypes}
                            onItemSelect={handleFilterTypesSelect}
                        />
                    </div>
                    <div className="container-fluid">
                        {pageFormType === "grid" && (
                            <ProductsGrid
                                products={productsCrop}
                                onAddToCart={handleAddToCart}
                            />
                        )}
                        {pageFormType === "card-list" && (
                            <ProductList
                                products={productsCrop}
                                onAddToCart={handleAddToCart}
                            />
                        )}
                    </div>
                    <div className="d-flex justify-content-center">
                        <Pagination
                            itemsCount={count}
                            pageSize={data.pageSize}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
