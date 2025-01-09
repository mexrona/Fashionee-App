import {useState} from "react";
import {colors} from "../data";

export default function Colors() {
    const [activeColors, setActiveColors] = useState(["Blue"]);

    const addIsActive = (activeColors, colors) => {
        for (let i = 0; i < activeColors.length; i++) {
            colors.forEach((element) => {
                if (activeColors[i] === element.data) {
                    element.isActive = true;
                }
            });
        }
    };

    const removeIsActive = (color, colors) => {
        colors.forEach((element) => {
            if (color === element.data) {
                element.isActive = false;
            }
        });
    };

    const handleClick = (color) => {
        for (let i = 0; i < activeColors.length; i++) {
            if (color === activeColors[i]) {
                removeIsActive(activeColors[i], colors);
                delete activeColors[i];
                setActiveColors([...activeColors]);
                return;
            }
        }

        setActiveColors([...activeColors, color]);
    };

    addIsActive(activeColors, colors);

    return (
        <div className="colors">
            <h2 className="sidebar__title">Colors</h2>
            <div className="colors__inner">
                {colors.map((color) => (
                    <div
                        className={
                            color.isActive
                                ? "colors__item active"
                                : "colors__item"
                        }
                        data-color={color.data}
                        key={color.id}>
                        <span
                            className="colors__checkbox"
                            onClick={() => handleClick(color.data)}>
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
                        <label className="colors__label" htmlFor={color.value}>
                            {color.data}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}
