export const useAddFavorite = () => {
    const addFavorite = (
        callBackOne,
        callBackTwo,
        callBackThree,
        callBackFour,
        callBackFive,
        product,
        key
    ) => {
        if (callBackOne) {
            callBackOne();
        }

        const favoriteProducts = callBackTwo(key);

        if (!favoriteProducts) {
            callBackThree(key, [{...product, isFavorite: 1}]);
            callBackFour(callBackFive, callBackTwo, key);
            return true;
        }

        let hasFavoriteProduct = false;

        const updatedProducts = favoriteProducts.map((favoriteProduct) => {
            if (favoriteProduct.id === product.id) {
                hasFavoriteProduct = true;

                if (favoriteProduct.isFavorite === 1) {
                    return {
                        ...favoriteProduct,
                        isFavorite: favoriteProduct.isFavorite - 1,
                    };
                }

                if (favoriteProduct.isFavorite === 0) {
                    return {
                        ...favoriteProduct,
                        isFavorite: favoriteProduct.isFavorite + 1,
                    };
                }
            }

            return favoriteProduct;
        });

        if (hasFavoriteProduct) {
            callBackThree(key, updatedProducts);
            callBackFour(callBackFive, callBackTwo, key);
            return true;
        }

        favoriteProducts.push({...product, isFavorite: 1});

        callBackThree(key, favoriteProducts);
        callBackFour(callBackFive, callBackTwo, key);
    };

    return {addFavorite};
};
