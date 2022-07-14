import React from "react";
import PropTypes from "prop-types";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";
import TableFooter from "../../ui/tableFooter";

const Table = ({
    onSort,
    selectedSort,
    columns,
    data,
    children,
    sorting,
    hasFooter,
    style
}) => {
    return (
        <table className={"table table-sm " + style}>
            {children || (
                <>
                    <TableHeader
                        {...{ onSort, selectedSort, columns, sorting }}
                    />
                    {hasFooter && <TableFooter />}
                    <TableBody {...{ columns, data }} />
                </>
            )}
        </table>
    );
};

Table.defaultProps = {
    hasFooter: false
};

Table.propTypes = {
    onSort: PropTypes.func,
    selectedSort: PropTypes.object,
    sorting: PropTypes.bool,
    columns: PropTypes.object,
    data: PropTypes.array,
    children: PropTypes.array,
    hasFooter: PropTypes.bool,
    style: PropTypes.string
};

export default Table;
