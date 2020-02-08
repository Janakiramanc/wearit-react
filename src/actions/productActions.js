import * as types from './actionTypes';
import axios from 'axios';

export function productsLoaded(products) {
    return {
        type: types.PRODUCTS_LOAD_SUCCESS, products
    };
};

//With Fetch
export function getProducts() {
    console.log("getproducts called")
    return function (dispatch) {
        fetch('https://api.myjson.com/bins/dap2o')
            .then(response => response.json())
            .then(json => {
                let list = json;
                dispatch(productsLoaded(list));
            })
            .catch((error)=>{
                console.log("Error occurred", error)
            });
    }
};

//With Axios
export function getProductsAxios() {
    return function (dispatch) {
        axios.get('https://api.myjson.com/bins/dap2o')
            // .then(response => response.json())
            .then(response => {
                let list = response.data;
                dispatch(productsLoaded(list));
            })
            .catch((error)=>{
                console.log("Error occurred", error)
            });
    }
};