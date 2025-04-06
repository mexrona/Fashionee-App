import CartProduct from "./CartProduct";
import Order from "../Order/Order";
import Code from "../Code/Code";

import {useLocalStorage} from "../../hooks/useLocalStorage";
import {useEffect, useState} from "react";

export default function Cart({setBasket, buyProduct}) {
    const [orderPrice, setOrderPrice] = useState(0);
    const [orderStatus, setOrderStatus] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    const {getLocalStorage} = useLocalStorage();

    const PRODUCT_IN_BASKET_KEY = "product-in-basket";

    const cartProducts = getLocalStorage(PRODUCT_IN_BASKET_KEY);

    const orderPriceCheck = () => {
        let sumOfProducts = 0;
        const allProducts = getLocalStorage(PRODUCT_IN_BASKET_KEY);

        if (allProducts) {
            allProducts.forEach((product) => {
                let productPrice = product.price * product.quantity;
                sumOfProducts += productPrice;
                sumOfProducts =
                    Math.round(parseFloat(sumOfProducts) * 100) / 100;
            });
        }

        setOrderPrice(sumOfProducts);
    };

    const totalPriceCheck = () => {
        if (!getLocalStorage("promo-code")) {
            setTotalPrice(Math.round(parseFloat(orderPrice + 15) * 100) / 100);
        }

        if (getLocalStorage("promo-code")) {
            setTotalPrice(
                Math.round(parseFloat(orderPrice * 0.9 + 15) * 100) / 100
            );
        }
    };

    useEffect(() => {
        orderPriceCheck();
        totalPriceCheck();
    }, [orderPrice]);

    return (
        <section className="container container--cart">
            <div className="cart">
                <div className="cart__inner" id="cartInner">
                    {cartProducts &&
                        cartProducts.map((product) => (
                            <CartProduct
                                key={product.id}
                                id={product.id}
                                image={product.image}
                                name={product.name}
                                oldPrice={product.oldPrice}
                                price={product.price}
                                quantity={product.quantity}
                                setBasket={setBasket}
                                product={product}
                                buyProduct={buyProduct}
                                orderPriceCheck={orderPriceCheck}
                                totalPriceCheck={totalPriceCheck}
                            />
                        ))}
                </div>
                <Order
                    orderPrice={orderPrice}
                    orderStatus={orderStatus}
                    setOrderStatus={setOrderStatus}
                    totalPrice={totalPrice}
                />
                <Code
                    setOrderStatus={setOrderStatus}
                    totalPriceCheck={totalPriceCheck}
                />
            </div>
        </section>
    );
}
