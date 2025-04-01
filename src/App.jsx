import {useState, useEffect} from "react";

import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Footer from "./components/Footer/Footer";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";

import {useLocalStorage} from "./hooks/useLocalStorage";
import {useUpdateInfo} from "./hooks/useUpdateInfo";
import {useAddFavorite} from "./hooks/useAddFavorite";
import {useBuyProduct} from "./hooks/useBuyProduct";

export default function App() {
    const [currentPage, setCurrentPage] = useState("Shop");

    const {getLocalStorage} = useLocalStorage();
    const {updateFavoriteInfo, updateBasketInfo} = useUpdateInfo();
    const {addFavorite} = useAddFavorite();
    const {buyProduct} = useBuyProduct();

    const changeCurrentPage = (currentPage) => setCurrentPage(currentPage);

    const FAVORITE_PRODUCT_KEY = "favorite-product";
    const PRODUCT_IN_BASKET_KEY = "product-in-basket";

    const [favorites, setFavorites] = useState(0);
    const [basket, setBasket] = useState(0);

    useEffect(() => {
        document.title = currentPage;
    }, [currentPage]);

    useEffect(() => {
        updateFavoriteInfo(setFavorites, getLocalStorage, FAVORITE_PRODUCT_KEY);
        updateBasketInfo(setBasket, getLocalStorage, PRODUCT_IN_BASKET_KEY);
    }, []);

    return (
        <>
            <Header
                onChange={changeCurrentPage}
                heartsCount={
                    !getLocalStorage(FAVORITE_PRODUCT_KEY) ? 0 : favorites
                }
                basketCount={
                    !getLocalStorage(PRODUCT_IN_BASKET_KEY) ? 0 : basket
                }
            />
            <main>
                <Intro currentPage={currentPage} />
                {currentPage === "Shop" && (
                    <Shop
                        addFavorite={addFavorite}
                        setFavorites={setFavorites}
                        buyProduct={buyProduct}
                        setBasket={setBasket}
                    />
                )}
                {currentPage === "Cart" && <Cart />}
            </main>
            <Footer />
        </>
    );
}
