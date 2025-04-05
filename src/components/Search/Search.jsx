export default function Search({onChange, onKeyUp}) {
    return (
        <div className="input">
            <label>
                <input
                    className="input__item"
                    id="search"
                    name="search"
                    type="text"
                    placeholder="Search"
                    onChange={() => onChange(event)}
                    onKeyUp={() => onKeyUp()}
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
