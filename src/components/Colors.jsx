export default function Colors() {
    return (
        <div className="colors">
            <h2 className="sidebar__title">Colors</h2>
            <div className="colors__inner">
                <div className="colors__item" data-color="Black">
                    <span className="colors__checkbox">
                        <img
                            className="colors__checkarrow"
                            src="../public/images/icons/checkarrow.png"
                            alt="Check Arrow"
                        />
                    </span>
                    <input
                        className="colors__input"
                        id="black"
                        name="color"
                        type="checkbox"
                        value="black"
                    />
                    <label className="colors__label" htmlFor="black">
                        Black
                    </label>
                </div>
                <div className="colors__item active" data-color="Blue">
                    <span className="colors__checkbox">
                        <img
                            className="colors__checkarrow"
                            src="../public/images/icons/checkarrow.png"
                            alt="Check Arrow"
                        />
                    </span>
                    <input
                        className="colors__input"
                        id="blue"
                        name="color"
                        type="checkbox"
                        value="blue"
                    />
                    <label className="colors__label" htmlFor="blue">
                        Blue
                    </label>
                </div>
                <div className="colors__item" data-color="Red">
                    <span className="colors__checkbox">
                        <img
                            className="colors__checkarrow"
                            src="../public/images/icons/checkarrow.png"
                            alt="Check Arrow"
                        />
                    </span>
                    <input
                        className="colors__input"
                        id="red"
                        name="color"
                        type="checkbox"
                        value="red"
                    />
                    <label className="colors__label" htmlFor="red">
                        Red
                    </label>
                </div>
                <div className="colors__item" data-color="Yellow">
                    <span className="colors__checkbox">
                        <img
                            className="colors__checkarrow"
                            src="../public/images/icons/checkarrow.png"
                            alt="Check Arrow"
                        />
                    </span>
                    <input
                        className="colors__input"
                        id="yellow"
                        name="color"
                        type="checkbox"
                        value="yellow"
                    />
                    <label className="colors__label" htmlFor="yellow">
                        Yellow
                    </label>
                </div>
                <div className="colors__item" data-color="Green">
                    <span className="colors__checkbox">
                        <img
                            className="colors__checkarrow"
                            src="../public/images/icons/checkarrow.png"
                            alt="Check Arrow"
                        />
                    </span>
                    <input
                        className="colors__input"
                        id="green"
                        name="color"
                        type="checkbox"
                        value="green"
                    />
                    <label className="colors__label" htmlFor="green">
                        Green
                    </label>
                </div>
            </div>
        </div>
    );
}
