import {useState} from "react";
import {colors} from "../data";

export default function Colors() {
    const [activeColor, setActiveColor] = useState("Blue");

    const handleClick = (color) => {
        setActiveColor(color);
    };

    return (
        <div className="colors">
            <h2 className="sidebar__title">Colors</h2>
            <div className="colors__inner">
                {colors.map((color) => {
                    return (
                        <div
                            className={
                                color.data === activeColor
                                    ? "colors__item active"
                                    : "colors__item"
                            }
                            data-color={color.data}
                            onClick={() => handleClick(color.data)}
                            key={color.value}>
                            <span className="colors__checkbox">
                                <img
                                    className="colors__checkarrow"
                                    src="../public/images/icons/checkarrow.png"
                                    alt="Check Arrow"
                                />
                            </span>
                            <input
                                className="colors__input"
                                id={color.value}
                                name="color"
                                type="checkbox"
                                value={color.value}
                            />
                            <label
                                className="colors__label"
                                htmlFor={color.value}>
                                {color.data}
                            </label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
