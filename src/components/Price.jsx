export default function Price() {
    return (
        <div className="price">
            <h2 className="sidebar__title">Price</h2>
            <div className="price__inner">
                <div className="price__block">
                    <input
                        type="text"
                        className="price__item"
                        id="priceMin"
                        placeholder="$21.00"
                    />
                    <input
                        type="text"
                        className="price__item"
                        id="priceMax"
                        placeholder="$187.99"
                    />
                </div>
                <div className="price__element"></div>
            </div>
        </div>
    );
}
