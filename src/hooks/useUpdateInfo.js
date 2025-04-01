export const useUpdateInfo = () => {
    const updateFavoriteInfo = (callBackOne, callBackTwo, key) => {
        const favoriteProducts = callBackTwo(key);

        if (!favoriteProducts) {
            return;
        }

        let countOfFavorite = 0;

        favoriteProducts.forEach((product) => {
            countOfFavorite += product.isFavorite;
        });

        callBackOne(countOfFavorite);
    };

    const updateBasketInfo = (callBackOne, callBackTwo, key) => {
        const productsInBasket = callBackTwo(key);

        if (!productsInBasket) {
            return false;
        }

        let countInBasket = 0;

        productsInBasket.forEach((product) => {
            countInBasket += product.quantity;
        });

        callBackOne(countInBasket);
    };

    return {
        updateFavoriteInfo,
        updateBasketInfo,
    };
};
