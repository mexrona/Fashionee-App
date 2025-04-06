import {useState} from "react";

import {useLocalStorage} from "../../hooks/useLocalStorage";
import {useUpdateInfo} from "../../hooks/useUpdateInfo";

export default function CartProduct({
    id,
    image,
    name,
    oldPrice,
    price,
    quantity,
    setBasket,
    product,
    buyProduct,
    orderPriceCheck,
    totalPriceCheck,
}) {
    const rounded = function (number) {
        return Math.round(parseFloat(number) * 100) / 100;
    };

    const [productCount, setProductCount] = useState(quantity);
    const [productPrice, setProductPrice] = useState(rounded(price * quantity));

    const {getLocalStorage, setLocalStorage, removeLocalStorage} =
        useLocalStorage();
    const {updateBasketInfo} = useUpdateInfo();

    const PRODUCT_IN_BASKET_KEY = "product-in-basket";
    const productsFromLS = getLocalStorage(PRODUCT_IN_BASKET_KEY);

    const clickOnMinus = () => {
        productsFromLS.forEach((productFromLS) => {
            if (productFromLS.id === id && productFromLS.quantity === 1) {
                if (getLocalStorage(`nohide${id}`)) {
                    removeLocalStorage(`nohide${id}`);
                }

                productFromLS.quantity = 0;
                setLocalStorage(PRODUCT_IN_BASKET_KEY, productsFromLS);
                setBasket((prev) => (prev -= 1));
                setLocalStorage(`hide${id}`, "hide");
                setProductPrice((prev) => rounded((prev -= price)));

                orderPriceCheck();
                totalPriceCheck();
            }

            if (productFromLS.id === id && productFromLS.quantity > 1) {
                productFromLS.quantity -= 1;
                setProductCount((prev) => (prev -= 1));
                setBasket((prev) => (prev -= 1));
                setLocalStorage(PRODUCT_IN_BASKET_KEY, productsFromLS);
                setProductPrice((prev) => rounded((prev -= price)));

                orderPriceCheck();
                totalPriceCheck();
            }
        });
    };

    const clickOnPlus = () => {
        buyProduct(
            getLocalStorage,
            setLocalStorage,
            updateBasketInfo,
            setBasket,
            product,
            PRODUCT_IN_BASKET_KEY
        );

        productsFromLS.forEach((productFromLS) => {
            if (productFromLS.id === id) {
                if (productCount) {
                    setProductCount((prev) => (prev += 1));
                    setProductPrice((prev) => rounded((prev += price)));

                    orderPriceCheck();
                    totalPriceCheck();
                }
            }
        });
    };

    const clickOnArrow = () => {
        productsFromLS.forEach((productFromLS) => {
            if (productFromLS.id === id) {
                if (getLocalStorage(`nohide${product.id}`)) {
                    removeLocalStorage(`nohide${product.id}`);
                }

                productFromLS.quantity = 0;
                setLocalStorage(PRODUCT_IN_BASKET_KEY, productsFromLS);
                setBasket((prev) => (prev -= productCount));
                setLocalStorage(`hide${product.id}`, "hide");
                setProductPrice(price);

                orderPriceCheck();
                totalPriceCheck();
            }
        });
    };

    return (
        <div
            className={
                getLocalStorage(`hide${id}`)
                    ? "cart__item hide"
                    : "cart__item" && getLocalStorage(`nohide${id}`)
                    ? "cart__item"
                    : "cart__item"
            }
            id={id}>
            <a href="#" className="cart__preview">
                <img src={image} alt={name} className="cart__img" />
            </a>
            <div className="cart__content">
                <a href="#" className="cart__name">
                    {name}
                </a>
                <div className="cart__info">
                    <div className="cart__data">
                        <div className="cart__price">
                            {oldPrice && (
                                <div className="cart__old">{`$${oldPrice}`}</div>
                            )}
                            <div className="cart__new" id="price">
                                {`$${price}`}
                            </div>
                        </div>
                        <div
                            className="cart__count"
                            id={`cartCount${id}`}
                            data-quantity={`${quantity}`}>
                            <span id={`cartInner${id}`}>{productCount}</span>
                            <span
                                className="cart__minus"
                                id={id}
                                onClick={() => clickOnMinus()}></span>
                            <span
                                className="cart__plus"
                                id={id}
                                onClick={() => clickOnPlus()}></span>
                        </div>
                    </div>
                    <div className="cart__main" id={`cartMain${id}`}>
                        {productPrice}
                    </div>
                </div>
            </div>
            <div
                className="cart__arrow"
                id={id}
                onClick={() => clickOnArrow()}></div>
        </div>
    );
}
