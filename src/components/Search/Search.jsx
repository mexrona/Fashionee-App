import {useDebounce} from "../../hooks/useDebounce";

export default function Search({searchValue, setSearchValue}) {
    const {debounce} = useDebounce();

    const onChange = (event) => setSearchValue(event.target.value);

    const onKeyUp = (value) => {
        debounce(() => {
            console.log(value);
        }, 500);
    };

    return (
        <div className="input">
            <label>
                <input
                    className="input__item"
                    id="search"
                    name="search"
                    type="text"
                    placeholder="Search"
                    value={searchValue}
                    onChange={() => onChange(event)}
                    onKeyUp={() => onKeyUp(searchValue)}
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
