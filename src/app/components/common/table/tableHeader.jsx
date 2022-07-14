import React from "react";
import PropTypes from "prop-types";
const TableHeader = ({ onSort, selectedSort, columns, sorting }) => {
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            });
        } else {
            onSort({ path: item, order: "asc" });
        }
    };
    const rendeSortArrow = (selectedSort, currentPath) => {
        if (selectedSort.path === currentPath) {
            if (selectedSort.order === "asc") {
                return <i className="bi bi-caret-down-fill"></i>;
            } else {
                return <i className="bi bi-caret-up-fill"></i>;
            }
        }
        return null;
    };

    return (
        <thead>
            <tr>
                <th>№</th>
                {Object.keys(columns).map((column) => (
                    <th
                        key={column}
                        onClick={
                            sorting && columns[column].path
                                ? () => handleSort(columns[column].path)
                                : undefined
                        }
                        {...{ role: columns[column].path && "button" }}
                        scope="col"
                    >
                        {columns[column].name}{" "}
                        {sorting &&
                            rendeSortArrow(selectedSort, columns[column].path)}
                    </th>
                ))}
            </tr>
        </thead>
    );
};
TableHeader.propTypes = {
    onSort: PropTypes.func,
    sorting: PropTypes.bool,
    selectedSort: PropTypes.object,
    columns: PropTypes.object.isRequired
};

export default TableHeader;
