import {useState} from "react";

import Pagination from "../Pagination/Pagination";
import CatalogCart from "./CatalogCart";

import {useSortProduct} from "../../hooks/useSortProduct";

export default function Catalog({
    addFavorite,
    setFavorites,
    buyProduct,
    setBasket,
    searchProducts,
    activePage,
    setActivePage,
}) {
    const [sortValue, setSortValue] = useState("");

    const {sortProduct} = useSortProduct();

    const perPage = 12;
    const countOfPages = Math.ceil(searchProducts.length / perPage);

    const onChange = (event) => {
        setSortValue(event.target.value);
    };

    const sortedProducts = sortProduct(searchProducts, sortValue);

    const firstProductIndex = activePage * perPage;

    const pageProducts = sortedProducts.slice(
        firstProductIndex,
        (activePage + 1) * perPage
    );

    return (
        <div className="catalog">
            <div className="catalog__header">
                <div className="catalog__text">
                    There are <span>{searchProducts.length}</span> products in
                    this category
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
