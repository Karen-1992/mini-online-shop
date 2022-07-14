import { createSlice } from "@reduxjs/toolkit";
import productsService from "../services/products.service";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        dataLoaded: false
    },
    reducers: {
        productsRequested: (state) => {
            state.isLoading = true;
        },
        productsReceived: (state, action) => {
            state.entities = action.payload;
            state.dataLoaded = true;
            state.isLoading = false;
        },
        productsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: productsReducer, actions } = productsSlice;
const { productsRequested, productsReceived, productsRequestFailed } = actions;

export const loadProductsList = () => async (dispatch) => {
    dispatch(productsRequested());
    try {
        const { content } = await productsService.get();
        dispatch(productsReceived(content));
    } catch (error) {
        dispatch(productsRequestFailed(error.message));
    }
};

export const getFilterProductsTypesList = () => (state) => {
    const filterData = {
        types: [],
        width: [],
        color: [],
        coverSide: []
    };
    for (const item of state.products.entities) {
        if (!filterData.types.find((t) => t.NAME === item.TYPE)) {
            filterData.types.push({
                NAME: item.TYPE,
                TYPE: "TYPE",
                ID: item.TYPE + item.ID
            });
        }
        if (!filterData.width.find((w) => w.NAME === item.WIDTH)) {
            filterData.width.push({
                NAME: item.WIDTH,
                TYPE: "WIDTH",
                ID: item.WIDTH + item.ID
            });
        }
        if (!filterData.color.find((c) => c.NAME === item.COLOR_CODE)) {
            filterData.color.push({
                NAME: item.COLOR_CODE,
                TYPE: "COLOR_CODE",
                ID: item.COLOR_CODE + item.ID
            });
        }
        if (!filterData.coverSide.find((c) => c.NAME === item.COVER_SIDE)) {
            filterData.coverSide.push({
                NAME: item.COVER_SIDE,
                TYPE: "COVER_SIDE",
                ID: item.COVER_SIDE + item.ID
            });
        }
    }
    const filterDataArray = [];
    for (const item of Object.values(filterData)) {
        for (const el of item) {
            if (el.NAME) {
                filterDataArray.push(el);
            }
        }
    }
    return filterDataArray;
};
export const getProducts = () => (state) => state.products.entities;
export const getDataStatus = () => (state) => state.products.dataLoaded;
export const getProductsLoadingStatus = () => (state) =>
    state.products.isLoading;
export const getProductQuantityById = (id) => (state) => {
    if (state.products.entities) {
        const { quantity } = state.products.entities.find((p) => p.ID === id);
        return quantity;
    }
};

export default productsReducer;
