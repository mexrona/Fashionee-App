import Pagination from "../Pagination/Pagination";

import CatalogCart from "./CatalogCart";

import {products} from "../../products.json";

export default function Catalog({addFavorite}) {
    return (
        <div className="catalog">
            <div className="catalog__header">
                <div className="catalog__text">
                    There are <span>{products.length}</span> products in this
                    category
                </div>
                <div className="catalog__filter">
                    <div className="arrow arrow--catalog"></div>
                    <select className="catalog__select" id="sort">
                        <option value="">By relevance</option>
                        <option value="ASC">By asc</option>
                        <option value="DESC">By desc</option>
                    </select>
                </div>
            </div>
            <div className="catalog__inner" id="products">
                {products.map((product) => (
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
                        product={product}
                    />
                ))}
            </div>
            <Pagination />
        </div>
    );
}
