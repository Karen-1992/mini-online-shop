import React from "react";
import PropTypes from "prop-types";
import Table from "../common/table";
// import Counter from "../common/counter";
import RemoveButton from "../common/removeButton";
import Amount from "./amount";
import TextField from "./textField";

const CartProductsTable = ({
    products,
    onSort,
    selectedSort,
    onDecrement,
    onIncrement,
    onRemove,
    sorting,
    ...rest
}) => {
    const columns = {
        name: {
            path: "NAME",
            name: "Наименование"
        },
        length: {
            path: "LENGTH",
            name: "Длина"
        },
        quantity: {
            path: "quantity",
            name: "Кол-во",
            component: (product) => (
                <TextField
                    name="quantity"
                    type="number"
                    id={product.ID}
                    quantity={product.quantity}
                />
            )
        },
        // quantity2: {
        //     path: "quantity",
        //     name: "Кол-во",
        //     component: (product) => (
        //         <Counter
        //             onDecrement={() => onDecrement(product.ID)}
        //             onIncrement={() => onIncrement(product.ID)}
        //             quantity={product.quantity}
        //         />
        //     )
        // },
        price: {
            path: "PRICE",
            name: "Цена/шт."
        },
        amount: {
            name: "Сумма",
            component: (product) => (
                <Amount quantity={product.quantity} price={product.PRICE} />
            )
        },
        remove: {
            component: (product) => (
                <RemoveButton onRemove={() => onRemove(product.ID)} />
            )
        }
    };
    return (
        <Table
            onSort={onSort}
            selectedSort={selectedSort}
            sorting={sorting}
            columns={columns}
            data={products}
            hasFooter={true}
            style="table-success table-striped table-hover"
        />
    );
};

CartProductsTable.propTypes = {
    products: PropTypes.array.isRequired,
    onDecrement: PropTypes.func.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    sorting: PropTypes.bool.isRequired,
    onSort: PropTypes.func,
    selectedSort: PropTypes.object
};

export default CartProductsTable;
