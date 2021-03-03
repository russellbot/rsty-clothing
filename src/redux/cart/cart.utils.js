export const addItemToCart = (cartItems, cartItemToAdd) => {
    // search cartItems to see if the cartItemToAdd is a duplicate
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
    // if it is a duplicate, make a new array where we add +1 to the quantity of the matching cartItem
    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            )
    }
    // if it is not a duplicate, add it to the end of the array with quantity of 1
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}