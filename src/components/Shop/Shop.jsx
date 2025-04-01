import Products from "../Products/Products";
import Newsletter from "../Newsletter/Newsletter";

export default function Shop({
    addFavorite,
    setFavorites,
    buyProduct,
    setBasket,
}) {
    return (
        <>
            <Products
                addFavorite={addFavorite}
                setFavorites={setFavorites}
                buyProduct={buyProduct}
                setBasket={setBasket}
            />
            <Newsletter />
        </>
    );
}
