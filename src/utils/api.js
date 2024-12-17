import { ItemsMapping } from "../contants"

const initialDB = {
    favourites: [],
    cartItems: [],
}

export function initiateDB() {
    localStorage.setItem('store', initialDB)
}


export function addItem(id, type) {
    const items = ItemsMapping[type];
    const item = {};
    let cartItems = localStorage.getItem('cartItems');
    cartItems = [...cartItems, item];
    localStorage.setItem('')
}

export function getCartItems() {
    return localStorage.getItem('store').cartItems ?? [];
}