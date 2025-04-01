import {useState, useEffect} from "react";

import {useLocalStorage} from "../../hooks/useLocalStorage";
import {useUpdateInfo} from "../../hooks/useUpdateInfo";

export default function CatalogHeart({addFavorite, setFavorites, product}) {
    const {getLocalStorage, setLocalStorage} = useLocalStorage();
    const {updateFavoriteInfo} = useUpdateInfo();

    const FAVORITE_PRODUCT_KEY = "favorite-product";

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        const copyOfFavoriteProducts = getLocalStorage(FAVORITE_PRODUCT_KEY);

        if (!copyOfFavoriteProducts) {
            return;
        }

        copyOfFavoriteProducts.forEach((favorite) => {
            if (favorite.id === product.id) {
                favorite.isFavorite === 1
                    ? setIsActive(true)
                    : setIsActive(false);
            }
        });
    }, []);

    return (
        <div
            className={isActive ? "catalog__heart favorite" : "catalog__heart"}
            onClick={() =>
                addFavorite(
                    handleClick,
                    getLocalStorage,
                    setLocalStorage,
                    updateFavoriteInfo,
                    setFavorites,
                    product,
                    FAVORITE_PRODUCT_KEY
                )
            }>
            <img src="../public/images/icons/heart.png" alt="Wishlist" />
        </div>
    );
}
