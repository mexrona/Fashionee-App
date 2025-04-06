import {useEffect} from "react";

import {useLocalStorage} from "../../hooks/useLocalStorage";

export default function Order({
    orderPrice,
    orderStatus,
    setOrderStatus,
    totalPrice,
}) {
    const {getLocalStorage} = useLocalStorage();

    const handleClick = () => {
        console.log(
            `Order price ${orderPrice}\nDiscount for promo code ${
                orderStatus ? "10%" : "0%"
            }\nDelivery $15\nTotal $${totalPrice}`
        );
    };

    useEffect(() => {
        if (getLocalStorage("promo-code")) {
            setOrderStatus(true);
        }
    }, []);

    return (
        <div className="order">
            <h3 className="order__title">Your Order</h3>
            <div className="order__inner">
                <div className="order__item">
                    Оrder price
                    <span className="order__price" id="orderPrice">
                        ${orderPrice}
                    </span>
                </div>
                <div className="order__item">
                    Discount for promo code
                    <span className="order__status" id="orderStatus">
                        {orderStatus ? "10%" : "0%"}
                    </span>
                </div>
                <div className="order__item">
                    <span>
                        Delivery
                        <span className="order__time">(Aug 02 at 16:00)</span>
                    </span>
                    <span className="order__price" id="delivery">
                        &#36;15
                    </span>
                </div>
            </div>
            <div className="order__total">
                Total
                <span className="order__price order__price--total" id="total">
                    ${totalPrice}
                </span>
            </div>
            <div
                className="button button--order"
                id="checkout"
                onClick={() => handleClick()}>
                Checkout
            </div>
        </div>
    );
}
