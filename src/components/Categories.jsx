import {useState} from "react";
import {categories} from "../data";

export default function Categories() {
    const [activeCategory, setActiveCategory] = useState("Men");

    const handleClick = (type) => {
        setActiveCategory(type);
    };

    return (
        <div className="categories">
            <h2 className="sidebar__title">Categories</h2>
            <div className="categories__inner">
                {categories.map((category) => {
                    return (
                        <div
                            className={
                                activeCategory === category.title
                                    ? "categories__item active"
                                    : "categories__item"
                            }
                            data-category={category.title}
                            onClick={() => handleClick(category.title)}
                            key={category.title}>
                            {category.title}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
