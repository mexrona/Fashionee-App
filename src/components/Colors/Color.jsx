import {useState} from "react";

export default function Color({data, value}) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div
            className={isActive ? "colors__item active" : "colors__item"}
            data-color={data}>
            <span className="colors__checkbox" onClick={() => handleClick()}>
                <img
                    className="colors__checkarrow"
                    src="../public/images/icons/checkarrow.png"
                    alt="Check Arrow"
                />
            </span>
            <input
                className="colors__input"
                id={value}
                name="color"
                type="checkbox"
                value={value}
            />
            <label className="colors__label" htmlFor={value}>
                {data}
            </label>
        </div>
    );
}
