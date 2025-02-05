import {useState} from "react";

export default function Price() {
    const [minPrice, setMinPrice] = useState("21.00");
    const [maxPrice, setMaxPrice] = useState("187.99");

    const changeMinPrice = (minPrice) => setMinPrice(minPrice);
    const changeMaxPrice = (maxPrice) => setMaxPrice(maxPrice);

    return (
        <div className="price">
            <h2 className="sidebar__title">Price</h2>
            <div className="price__inner">
                <input
                    type="number"
                    className="price__output price__output--min"
                    placeholder={`$${minPrice}`}
                    onChange={(event) => changeMinPrice(event.target.value)}
                />
                <input
                    type="range"
                    min="0"
                    max="100"
                    step="0.01"
                    value={minPrice}
                    onInput={(event) => changeMinPrice(event.target.value)}
                    className="price__item"
                    id="priceMin"
                />
                <input
                    type="number"
                    className="price__output price__output--max"
                    placeholder={`$${maxPrice}`}
                    onChange={(event) => changeMaxPrice(event.target.value)}
                />
                <input
                    type="range"
                    min="100"
                    max="200"
                    step="0.01"
                    value={maxPrice}
                    onInput={(event) => changeMaxPrice(event.target.value)}
                    className="price__item"
                    id="priceMax"
                />
            </div>
        </div>
    );
}
