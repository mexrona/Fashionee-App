export const useBuyProduct = () => {
    const buyProduct = (
        callBackOne,
        callBackTwo,
        callBackThree,
        callBackFour,
        product,
        key
    ) => {
        const productsInBasket = callBackOne(key);

        if (callBackOne(`hide${product.id}`)) {
            localStorage.removeItem(`hide${product.id}`);
        }

        if (!productsInBasket) {
            callBackTwo(key, [{...product, quantity: 1}]);
            callBackThree(callBackFour, callBackOne, key);
            return true;
        }

        let hasProductInBasket = false;

        const updatedProducts = productsInBasket.map((productInBasket) => {
            if (productInBasket.id === product.id) {
                hasProductInBasket = true;

                return {
                    ...productInBasket,
                    quantity: productInBasket.quantity + 1,
                };
            }

            return productInBasket;
        });

        if (hasProductInBasket) {
            callBackTwo(key, updatedProducts);
            callBackThree(callBackFour, callBackOne, key);
            return true;
        }

        productsInBasket.push({...product, quantity: 1});

        callBackTwo(key, productsInBasket);
        callBackThree(callBackFour, callBackOne, key);
    };

    return {buyProduct};
};
