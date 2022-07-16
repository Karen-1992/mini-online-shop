import React from "react";
import PropTypes from "prop-types";
import { findMinFromObject } from "../../utils/findMinFromArray";

const Price = ({ PRICE, SKU, selectedData }) => {
    const getPrice = () => {
        const skuArr = Object.values(SKU);
        const selectedIndex = skuArr.findIndex(s => s.ID === selectedData.sku);
        const { minPrice } = findMinFromObject(SKU);
        let price;
        if (minPrice === +skuArr[selectedIndex].PRICE) {
            price = `от ${minPrice} руб.`;
        } else {
            const findItem = skuArr.find(s => s.ID === selectedData.sku);
            price = `${findItem.PRICE} руб.`;
        }
        return price;
    };
    return (
        <div className="p-2">
            <span className="">
                {!SKU ? (
                    `${PRICE} руб.`
                ) : (
                    getPrice()
                )}
            </span>
        </div>
    );
};

Price.propTypes = {
    PRICE: PropTypes.string,
    SKU: PropTypes.object,
    selectedData: PropTypes.object
};

export default Price;
