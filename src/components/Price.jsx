import {useState} from "react";

export default function Price() {
    const [min, setMin] = useState("21.00");
    const [max, setMax] = useState("187.99");

    const changeMin = (min) => setMin(min);
    const changeMax = (max) => setMax(max);

    return (
        <div className="price">
            <h2 className="sidebar__title">Price</h2>
            <div className="price__inner">
                <input
                    type="text"
                    className="price__output price__output--min"
                    placeholder={`$${min}`}
                    onChange={(event) => changeMin(event.target.value)}
                />
                <input
                    type="range"
                    min="0"
                    max="100"
                    step="0.01"
                    value={min}
                    onInput={(event) => changeMin(event.target.value)}
                    className="price__item"
                    id="priceMin"
                />
                <input
                    type="text"
                    className="price__output price__output--max"
                    placeholder={`$${max}`}
                    onChange={(event) => changeMax(event.target.value)}
                />
                <input
                    type="range"
                    min="100"
                    max="200"
                    step="0.01"
                    value={max}
                    onInput={(event) => changeMax(event.target.value)}
                    className="price__item"
                    id="priceMax"
                />
            </div>
        </div>
    );
}
