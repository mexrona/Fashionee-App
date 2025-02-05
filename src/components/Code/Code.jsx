import Socials from "../Socials/Socials";

export default function Code() {
    return (
        <div className="code">
            <h3 className="code__title">You have a promo code?</h3>
            <p className="code__text">
                To receive up-to-date promotional codes, subscribe to us on
                social networks.
            </p>
            <form action="/" method="get">
                <div className="code__input">
                    <div className="input input--code">
                        <label>
                            <input
                                className="input__item"
                                id="promoCodeInput"
                                name="code"
                                type="text"
                                placeholder="Enter promo code"
                            />
                        </label>
                    </div>
                    <button
                        className="button button--code"
                        id="promoCodeBtn"
                        type="submit">
                        <span className="code__arrow"></span>
                    </button>
                </div>
            </form>
            <Socials />
        </div>
    );
}
