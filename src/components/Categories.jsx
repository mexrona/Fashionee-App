export default function Categories() {
    return (
        <div className="categories">
            <h2 className="sidebar__title">Categories</h2>
            <div className="categories__inner">
                <div className="categories__item" data-category="All">
                    All
                </div>
                <div className="categories__item active" data-category="Men">
                    Men
                </div>
                <div className="categories__item" data-category="Women">
                    Women
                </div>
                <div className="categories__item" data-category="Accessories">
                    Accessories
                </div>
                <div className="categories__item" data-category="New Arrivals">
                    New Arrivals
                </div>
            </div>
        </div>
    );
}
