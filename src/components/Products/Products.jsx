import {useState} from "react";

import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Price from "../Price/Price";
import Colors from "../Colors/Colors";
import Reviewed from "../Reviewed/Reviewed";
import Banner from "../Banner/Banner";
import Catalog from "../Catalog/Catalog";

import {products} from "../../products.json";

export default function Products({
    addFavorite,
    setFavorites,
    buyProduct,
    setBasket,
}) {
    const [searchValue, setSearchValue] = useState("");

    const searchProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(searchValue.toLowerCase());
    });

    const onChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <section className="container container--products">
            <div className="products">
                <aside className="sidebar">
                    <Search onChange={onChange} />
                    <Categories />
                    <Price />
                    <Colors />
                    <div className="sidebar__deploy active">
                        <div className="arrow arrow--sidebar"></div>
                        Deploy
                    </div>
                    <button className="button" id="applyFilter" disabled>
                        Apply Filter
                    </button>
                    <Reviewed />
                    <Banner />
                </aside>
                <Catalog
                    addFavorite={addFavorite}
                    setFavorites={setFavorites}
                    buyProduct={buyProduct}
                    setBasket={setBasket}
                    searchProducts={searchProducts}
                />
            </div>
        </section>
    );
}
