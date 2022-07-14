import React from "react";
import ProductCard from "./productCard";
import PropTypes from "prop-types";

const ProductList = ({ products, onAddToCart }) => {
    return (
        <div className="d-flex flex-column justify-content-center gap-3 py-3">
            {products.map((product) => (
                <ProductCard
                    key={product.ID}
                    product={product}
                    onAddToCart={onAddToCart}
                    formType="list"
                />
            ))}
        </div>
    );
};

ProductList.propTypes = {
    products: PropTypes.array,
    onAddToCart: PropTypes.func
};

export default ProductList;
