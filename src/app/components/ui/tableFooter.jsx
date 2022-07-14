import React from "react";
import { useSelector } from "react-redux/es/exports";
import { getCartListAmountPrice } from "../../store/cart";

const TableFooter = () => {
    const amountPrice = useSelector(getCartListAmountPrice());
    return (
        <tfoot>
            <tr>
                <th></th>
                <th>Итого</th>
                <th></th>
                <th></th>
                <th></th>
                <th>{amountPrice} руб.</th>
                <th></th>
            </tr>
        </tfoot>
    );
};

export default TableFooter;
