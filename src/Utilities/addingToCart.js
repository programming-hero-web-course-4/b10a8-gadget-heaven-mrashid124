import { toast } from 'react-toastify';

const getToCart = () => {
    const storedListStr = localStorage.getItem('cart-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }
}

const addToCart = (id) => {
    const storedList = getToCart();
    if (storedList.includes(id)) {
        toast("This item already Exist!");
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('cart-list', storedListStr);
        toast("Item added successfully");
    }
}

const getToWishlist = () => {
    const storedWishListStr = localStorage.getItem('wish-list');
    if (storedWishListStr) {
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }
    else {
        return [];
    }
}

const addToWishlist = (id) => {
    const storedWishList = getToWishlist();
    if (storedWishList.includes(id)) {
        toast("You can not add same item in your wishlist");
    }
    else {
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListStr);
        toast("Item added successfully.");
    }
}

export { getToCart, addToCart, getToWishlist, addToWishlist }