export default function Search({onChange}) {
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
