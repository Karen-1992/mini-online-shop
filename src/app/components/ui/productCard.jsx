import React, { useState } from "react";
import PropTypes from "prop-types";
import AddButton from "../common/addButton";
import SelectField from "../common/selectField";
import Price from "../common/price";

const ProductCard = ({ product, onAddToCart, formType }) => {
    const { ID, PICTURE, NAME, SKU } = product;

    const skuArr = SKU && Object.values(SKU);
    const [data, setData] = useState({
        sku: SKU && skuArr[0].ID
    });
    const handleaddToCart = (product) => {
        const selectedData = SKU ? getProductById(data.sku) : product;
        onAddToCart(selectedData);
        setData(data);
    };
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    function getProductById(id) {
        return skuArr.find((item) => item.ID === id);
    }
    function transformData() {
        const optionsArr = [];
        for (const i of skuArr) {
            optionsArr.push({
                label: i.LENGTH || i.NAME,
                value: i.ID
            });
        }
        return optionsArr;
    }
    return (
        <div
            className={
                "d-flex " +
                (formType === "list"
                    ? "product-list container-md flex-wrap px-4 "
                    : "product flex-column ") +
                "justify-content-between + bg-Light rounded-3 p-2 shadow"
            }
            key={ID}
        >
            <div className="">
                <div className="">{PICTURE}</div>
                <h6>{NAME}</h6>
                {SKU && (
                    <div className="text-center">
                        <span>Выберите исполнение</span>
                        <SelectField
                            options={transformData()}
                            name="sku"
                            onChange={handleChange}
                            value={data.sku}
                        />
                    </div>
                )}
            </div>
            <div className="d-flex flex-column text-center justify-content-around">
                <Price {...product} />
                <AddButton onAddToCart={() => handleaddToCart(product)} />
            </div>
        </div>
    );
};

ProductCard.defaultProps = {
    formType: "grid"
};

ProductCard.propTypes = {
    product: PropTypes.object,
    onAddToCart: PropTypes.func,
    formType: PropTypes.string
};

export default ProductCard;
