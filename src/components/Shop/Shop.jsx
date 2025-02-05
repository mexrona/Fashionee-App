import Products from "../Products/Products";
import Newsletter from "../Newsletter/Newsletter";

export default function Shop({addFavorites}) {
    return (
        <>
            <Products addFavorites={addFavorites} />
            <Newsletter />
        </>
    );
}
