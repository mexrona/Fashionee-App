import {useState, useEffect} from "react";

import {useLocalStorage} from "../../hooks/useLocalStorage";

export default function CatalogHeart({addFavorite, product}) {
    const {getLocalStorage} = useLocalStorage();

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
            onClick={() => addFavorite(handleClick, product)}>
            <img src="../public/images/icons/heart.png" alt="Wishlist" />
        </div>
    );
}
