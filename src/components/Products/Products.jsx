import {useEffect, useState} from "react";

import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Price from "../Price/Price";
import Colors from "../Colors/Colors";
import Reviewed from "../Reviewed/Reviewed";
import Banner from "../Banner/Banner";
import Catalog from "../Catalog/Catalog";

import {useFilterProduct} from "../../hooks/useFilterProduct";
import {products} from "../../products.json";

export default function Products({
    addFavorite,
    setFavorites,
    buyProduct,
    setBasket,
}) {
    const [activePage, setActivePage] = useState(0);
    const [searchValue, setSearchValue] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [colors, setColors] = useState([]);
    const [applyFilter, setApplyFilter] = useState("disabled");
    const [searchProducts, setSearchProducts] = useState(products);

    const {filterProductsByFilterInfo} = useFilterProduct();

    const oldFilter = {
        category: "All",
        price: {
            min: 0,
            max: 1000,
        },
        colors: [],
    };

    const currentFilter = {
        category: activeCategory,
        price: {
            min: minPrice,
            max: maxPrice,
        },
        colors: colors,
    };

    const onChange = (event) => {
        setSearchValue(event.target.value);
        setActivePage(0);
    };

    const onKeyUp = () => {
        setSearchProducts((prev) =>
            prev.filter((product) => {
                return product.name
                    .toLowerCase()
                    .includes(searchValue.toLowerCase());
            })
        );
    };

    const handleClick = (products, currentFilter) => {
        if (currentFilter.category === "All") {
            setApplyFilter("disabled");
            setSearchProducts(products);
        }

        setActivePage(0);
        setSearchProducts(filterProductsByFilterInfo(products, currentFilter));
    };

    useEffect(() => {
        if (
            currentFilter.category !== oldFilter.category ||
            currentFilter.price.min !== oldFilter.price.min ||
            currentFilter.price.max !== oldFilter.price.max ||
            currentFilter.colors.toString() !== oldFilter.colors.toString()
        ) {
            setApplyFilter("");
        }
    }, [currentFilter]);

    useEffect(() => {
        if (searchValue === "") {
            setSearchProducts(products);
        }
    }, [searchValue]);

    return (
        <section className="container container--products">
            <div className="products">
                <aside className="sidebar">
                    <Search onChange={onChange} onKeyUp={onKeyUp} />
                    <Categories
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                    />
                    <Price
                        minPrice={minPrice}
                        setMinPrice={setMinPrice}
                        maxPrice={maxPrice}
                        setMaxPrice={setMaxPrice}
                    />
                    <Colors colors={colors} setColors={setColors} />
                    <div className="sidebar__deploy active">
                        <div className="arrow arrow--sidebar"></div>
                        Deploy
                    </div>
                    <button
                        className="button"
                        id="applyFilter"
                        onClick={() => handleClick(products, currentFilter)}
                        disabled={applyFilter}>
                        Apply Filter
                    </button>
                    <Reviewed />
                    <Banner />
                </aside>
                <Catalog
                    addFavorite={addFavorite}
                    setFavorites={setFavorites}
                    buyProduct={buyProduct}
                    activePage={activePage}
                    setActivePage={setActivePage}
                    setBasket={setBasket}
                    searchProducts={searchProducts}
                />
            </div>
        </section>
    );
}
