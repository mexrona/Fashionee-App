import Categories from "./Categories";
import Input from "./Input";
import Price from "./Price";
import Colors from "./Colors";
import Reviewed from "./Reviewed";
import Banner from "./Banner";
import Catalog from "./Catalog";

export default function Products() {
    return (
        <section className="container container--products">
            <div className="products">
                <aside className="sidebar">
                    <Input />
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
                <Catalog />
            </div>
        </section>
    );
}
