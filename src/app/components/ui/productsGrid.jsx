import React from "react";
import ProductCard from "./productCard";
import PropTypes from "prop-types";

const ProductsGrid = ({ products, onAddToCart }) => {
    return (
        <div className="d-flex flex-wrap justify-content-center gap-3 py-3">
            {products.map((product) => (
                <ProductCard
                    key={product.ID}
                    product={product}
                    onAddToCart={onAddToCart}
                />
            ))}
        </div>
    );
};

ProductsGrid.propTypes = {
    products: PropTypes.array,
    onAddToCart: PropTypes.func
};
export default ProductsGrid;
