import {categories} from "../../data";

export default function Categories({activeCategory, setActiveCategory}) {
    const handleClick = (type) => {
        setActiveCategory(type);
    };

    return (
        <div className="categories">
            <h2 className="sidebar__title">Categories</h2>
            <div className="categories__inner">
                {categories.map((category) => (
                    <ul
                        className={
                            activeCategory === category.title
                                ? "categories__item active"
                                : "categories__item"
                        }
                        data-category={category.title}
                        onClick={() => handleClick(category.title)}
                        key={category.id}>
                        {category.title}
                    </ul>
                ))}
            </div>
        </div>
    );
}
