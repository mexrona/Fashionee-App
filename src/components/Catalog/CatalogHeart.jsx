import {useState} from "react";

export default function CatalogHeart({addFavorite, product}) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div
            className={isActive ? "catalog__heart favorite" : "catalog__heart"}
            onClick={() => addFavorite(handleClick, product)}>
            <img src="../public/images/icons/heart.png" alt="Wishlist" />
        </div>
    );
}
