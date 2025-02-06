import {useEffect, useState} from "react";

import {useLocalStorage} from "../../hooks/useLocalStorage";

export default function CatalogHeart({addFavorite, product}) {
    const {setLocalStorage, getLocalStorage} = useLocalStorage();

    const getKey = getLocalStorage(`favorite${product.id}`);

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        if (!getKey || getKey === "no-active") {
            setLocalStorage(`favorite${product.id}`, "active");
            setIsActive(!isActive);
            return;
        }

        if (getKey === "active") {
            setLocalStorage(`favorite${product.id}`, "no-active");
            setIsActive(!isActive);
        }
    };

    useEffect(() => {
        if (!getKey) {
            return;
        }

        if (getKey === "active") {
            setIsActive(true);
            return;
        }

        if (getKey === "no-active") {
            setIsActive(false);
        }
    }, []);

    return (
        <div
            className={isActive ? "catalog__heart favorite" : "catalog__heart"}
            onClick={() => addFavorite(handleClick, product)}>
            <img src="../public/images/icons/heart.png" alt="Wishlist" />
        </div>
    );
}
