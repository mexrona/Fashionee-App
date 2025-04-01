import CatalogHeart from "./CatalogHeart";

import {useLocalStorage} from "../../hooks/useLocalStorage";
import {useUpdateInfo} from "../../hooks/useUpdateInfo";

export default function CatalogCart({
    image,
    name,
    isSale,
    isNew,
    oldPrice,
    price,
    id,
    addFavorite,
    setFavorites,
    buyProduct,
    setBasket,
    product,
}) {
    const {getLocalStorage, setLocalStorage} = useLocalStorage();
    const {updateBasketInfo} = useUpdateInfo();

    const PRODUCT_IN_BASKET_KEY = "product-in-basket";

    return (
        <div className="catalog__item">
            <a
                href="#"
                className="catalog__preview"
                onClick={(event) => event.preventDefault()}>
                <img src={image} alt={name} className="catalog__img" />
            </a>
            {isSale && (
                <div className="catalog__status catalog__status--sale">
                    Sale
                </div>
            )}
            {isNew && (
                <div className="catalog__status catalog__status--new">New</div>
            )}
            <CatalogHeart
                addFavorite={addFavorite}
                setFavorites={setFavorites}
                product={product}
            />
            <a href="#" className="catalog__name">
                {name}
            </a>
            <div className="catalog__price">
                {oldPrice && <div className="catalog__old">${oldPrice}</div>}
                <div className="catalog__new">${price}</div>
            </div>
            <button
                className="catalog__buy"
                id={id}
                onClick={() =>
                    buyProduct(
                        getLocalStorage,
                        setLocalStorage,
                        updateBasketInfo,
                        setBasket,
                        product,
                        PRODUCT_IN_BASKET_KEY
                    )
                }>
                Купить
            </button>
        </div>
    );
}
