import Products from "../Products/Products";
import Newsletter from "../Newsletter/Newsletter";

export default function Shop({addFavorite}) {
    return (
        <>
            <Products addFavorite={addFavorite} />
            <Newsletter />
        </>
    );
}
