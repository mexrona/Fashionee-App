import Pagination from "../Pagination/Pagination";

import CatalogHeart from "./CatalogHeart";

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
                    <div className="catalog__item" key={product.id}>
                        <a
                            href="#"
                            className="catalog__preview"
                            onClick={(event) => event.preventDefault()}>
                            <img
                                src={product.image}
                                alt={product.name}
                                className="catalog__img"
                            />
                        </a>
                        {product.isSale && (
                            <div className="catalog__status catalog__status--sale">
                                Sale
                            </div>
                        )}
                        {product.isNew && (
                            <div className="catalog__status catalog__status--new">
                                New
                            </div>
                        )}
                        <CatalogHeart
                            product={product}
                            addFavorite={addFavorite}
                        />
                        <a href="#" className="catalog__name">
                            {product.name}
                        </a>
                        <div className="catalog__price">
                            {product.oldPrice && (
                                <div className="catalog__old">
                                    ${product.oldPrice}
                                </div>
                            )}
                            <div className="catalog__new">${product.price}</div>
                        </div>
                        <button className="catalog__buy" id={product.id}>
                            Купить
                        </button>
                    </div>
                ))}
            </div>
            <Pagination />
        </div>
    );
}
