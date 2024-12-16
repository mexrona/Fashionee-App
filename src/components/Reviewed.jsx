import {products} from "../products.json";

export default function Reviewed() {
    const getRandomProducts = (products, count) => {
        const newProducts = [...products];
        const randProducts = [];

        do {
            const randomNumber = Math.floor(Math.random() * newProducts.length);

            randProducts[randProducts.length] = newProducts.splice(
                randomNumber,
                1
            )[0];
        } while (randProducts.length < count);

        return randProducts;
    };

    const randProducts = getRandomProducts(products, 3);

    return (
        <div className="reviewed">
            <h2 className="sidebar__title">Reviewed By You</h2>
            <div className="reviewed__inner" id="reviewedProducts">
                {randProducts.map((product) => {
                    return (
                        <div className="reviewed__item" key={product.id}>
                            <a className="reviewed__preview" href="#">
                                <img
                                    className="reviewed__img"
                                    src={product.image}
                                    alt={product.name}
                                />
                            </a>
                            <div className="reviewed__info">
                                <a className="reviewed__name" href="#">
                                    {product.name}
                                </a>
                                <div className="reviewed__price">
                                    <span className="reviewed__new">
                                        ${product.price}
                                    </span>
                                    <span className="reviewed__old">
                                        {product.oldPrice
                                            ? `$${product.oldPrice}`
                                            : null}
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
