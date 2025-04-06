import {useState} from "react";

import Socials from "../Socials/Socials";

import {useLocalStorage} from "../../hooks/useLocalStorage";

export default function Code({setOrderStatus, totalPriceCheck}) {
    const [codeValue, setCodeValue] = useState("");

    const {setLocalStorage} = useLocalStorage();

    const onChange = (event) => {
        setCodeValue(event.target.value);
    };

    const handleClick = (event) => {
        event.preventDefault();

        if (codeValue === "ilovereact") {
            setLocalStorage("promo-code", true);
            setOrderStatus(true);
        } else {
            setOrderStatus(false);
        }

        totalPriceCheck();
    };

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
                                onChange={() => onChange(event)}
                            />
                        </label>
                    </div>
                    <button
                        className="button button--code"
                        id="promoCodeBtn"
                        type="submit"
                        onClick={() => handleClick(event)}>
                        <span className="code__arrow"></span>
                    </button>
                </div>
            </form>
            <Socials />
        </div>
    );
}
