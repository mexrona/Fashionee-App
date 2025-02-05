import {useState} from "react";

export default function Search() {
    const [value, setValue] = useState("");

    const onChange = (value) => setValue(value);

    return (
        <div className="input">
            <label>
                <input
                    className="input__item"
                    id="search"
                    name="search"
                    type="text"
                    placeholder="Search"
                    value={value}
                    onChange={() => onChange()}
                />
                <img
                    className="input__icon input__icon--search"
                    src="../public/images/icons/search.png"
                    alt="Search"
                />
            </label>
        </div>
    );
}
