import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Price from "../Price/Price";
import Colors from "../Colors/Colors";
import Reviewed from "../Reviewed/Reviewed";
import Banner from "../Banner/Banner";
import Catalog from "../Catalog/Catalog";

export default function Products({addFavorites}) {
    return (
        <section className="container container--products">
            <div className="products">
                <aside className="sidebar">
                    <Search />
                    <Categories />
                    <Price />
                    <Colors />
                    <div className="sidebar__deploy active">
                        <div className="arrow arrow--sidebar"></div>
                        Deploy
                    </div>
                    <button className="button" id="applyFilter">
                        Apply Filter
                    </button>
                    <Reviewed />
                    <Banner />
                </aside>
                <Catalog addFavorites={addFavorites} />
            </div>
        </section>
    );
}
