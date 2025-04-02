import Pagination from "../Pagination/Pagination";
import CatalogCart from "./CatalogCart";

import {useState, useEffect} from "react";

import {useLocalStorage} from "../../hooks/useLocalStorage";
import {usePagination} from "../../hooks/usePagination";
import {useFilter} from "../../hooks/useFilter";

import {products} from "../../products.json";

export default function Catalog({
    addFavorite,
    setFavorites,
    buyProduct,
    setBasket,
}) {
    const {getLocalStorage, setLocalStorage} = useLocalStorage();
    const {paginateCount, createPagination, paginateProducts} = usePagination();
    const {filterProductsByFilterInfo, filterProducts} = useFilter();

    const [activePage, setActivePage] = useState("1");
    const [pageCount, setPageCount] = useState();
    const [productsObject, setProductsObject] = useState(products);

    const PAGINATE_COUNT_KEY = "paginate-count";
    const paginationInfo = {
        activePage: Number(activePage) - 1,
        perPage: 12,
    };

    let oldFilter = {
        category: "All",
        price: {
            min: 0,
            max: 999999,
        },
        colors: ["Blue"],
    };

    const currentFilter = {
        category: "All",
        price: {
            min: 0,
            max: 999999,
        },
        colors: [],
    };

    let searchValue = "";
    let sort = "";

    useEffect(() => {
        setPageCount(products.length / paginationInfo.perPage);
    }, []);

    const prevCondition = (callBack) => {
        console.log("prev", paginationInfo);

        if (paginationInfo.activePage !== 0) {
            console.log("YES prev");

            setActivePage(`${Number(activePage) - 1}`);
            // paginationInfo.activePage = paginationInfo.activePage - 1;
            console.log("prev", paginationInfo);

            callBack();
        }
    };

    const nextCondition = (callBack) => {
        console.log("next", paginationInfo);

        if (paginationInfo.activePage !== pageCount) {
            console.log("YES next");

            setActivePage(`${Number(activePage) + 1}`);
            // paginationInfo.activePage = paginationInfo.activePage + 1;
            console.log("next", paginationInfo);

            callBack();
        }
    };

    const createProductList = (filteredProducts, productsCount) => {
        console.log(filteredProducts, productsCount);

        setProductsObject(filteredProducts);
        createPagination(productsCount, paginationInfo);
    };

    const callBackFilter = () => {
        const {filteredProducts, productsCount} = filterProducts(
            searchValue,
            oldFilter,
            sort,
            paginationInfo,
            products,
            filterProductsByFilterInfo,
            paginateProducts
        );

        createProductList(filteredProducts, productsCount);
    };

    const handleClick = (condition, callBack) => {
        console.log("click");
        console.log("до", paginationInfo.activePage);

        paginateCount(getLocalStorage, setLocalStorage, PAGINATE_COUNT_KEY);

        condition(callBack);

        console.log("после", paginationInfo.activePage);
    };

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
                {productsObject.map((product) => (
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
                activePage={activePage}
                handleClick={handleClick}
                prevCondition={prevCondition}
                nextCondition={nextCondition}
                callBackFilter={callBackFilter}
            />
        </div>
    );
}
