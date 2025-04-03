import {useState} from "react";

import Pagination from "../Pagination/Pagination";
import CatalogCart from "./CatalogCart";

import {useSortProduct} from "../../hooks/useSortProduct";

import {products} from "../../products.json";

export default function Catalog({
    addFavorite,
    setFavorites,
    buyProduct,
    setBasket,
}) {
    const [activePage, setActivePage] = useState(0);
    const [sortValue, setSortValue] = useState("");

    const {sortProduct} = useSortProduct();

    const perPage = 12;
    const countOfPages = Math.ceil(products.length / perPage);
    let firstProduct = activePage * perPage + 1;
    let lastProduct = activePage * perPage + 12;

    const pageProducts = products.filter((product) => {
        return product.id >= firstProduct && product.id <= lastProduct;
    });

    const onChange = (event) => {
        setSortValue(event.target.value);
    };

    sortProduct(pageProducts, sortValue);

    return (
        <div className="catalog">
            <div className="catalog__header">
                <div className="catalog__text">
                    There are <span>{products.length}</span> products in this
                    category
                </div>
                <div className="catalog__filter">
                    <div className="arrow arrow--catalog"></div>
                    <select
                        className="catalog__select"
                        id="sort"
                        onChange={() => onChange(event)}>
                        <option value="">By relevance</option>
                        <option value="ASC">By asc</option>
                        <option value="DESC">By desc</option>
                    </select>
                </div>
            </div>
            <div className="catalog__inner" id="products">
                {pageProducts.map((product) => (
                    <CatalogCart
                        key={product.id}
                        image={product.image}
                        name={product.name}
                        isSale={product.isSale}
                        isNew={product.isNew}
                        oldPrice={product.oldPrice}
                        price={product.price}
                        id={product.id}
                        addFavorite={addFavorite}
                        setFavorites={setFavorites}
                        buyProduct={buyProduct}
                        setBasket={setBasket}
                        product={product}
                    />
                ))}
            </div>
            <Pagination
                setActivePage={setActivePage}
                countOfPages={countOfPages}
                activePage={activePage}
            />
        </div>
    );
}
