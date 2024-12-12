export default function Order() {
    return (
        <div className="order">
            <h3 className="order__title">Your Order</h3>
            <div className="order__inner">
                <div className="order__item">
                    Оrder price
                    <span className="order__price" id="orderPrice">
                        &#36;0
                    </span>
                </div>
                <div className="order__item">
                    Discount for promo code
                    <span className="order__status" id="orderStatus">
                        0%
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
                    &#36;0
                </span>
            </div>
            <div className="button button--order" id="checkout">
                Checkout
            </div>
        </div>
    );
}
