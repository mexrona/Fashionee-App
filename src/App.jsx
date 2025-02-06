import {useState, useEffect} from "react";

import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Footer from "./components/Footer/Footer";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";

import {useLocalStorage} from "./hooks/useLocalStorage";

export default function App() {
    const [currentPage, setCurrentPage] = useState("Shop");

    const {setLocalStorage, getLocalStorage} = useLocalStorage();

    useEffect(() => {
        document.title = currentPage;
    }, [currentPage]);

    const changeCurrentPage = (currentPage) => setCurrentPage(currentPage);

    const FAVORITE_PRODUCT_KEY = "favorite-product";

    const [favorites, setFavorites] = useState(0);

    const updateFavoriteInfo = () => {
        const favoriteProducts = getLocalStorage(FAVORITE_PRODUCT_KEY);

        if (!favoriteProducts) {
            return;
        }

        let countOfFavorite = 0;

        favoriteProducts.forEach((product) => {
            countOfFavorite += product.isFavorite;
        });

        setFavorites(countOfFavorite);
    };

    const addFavorite = (callBack, product) => {
        if (callBack) {
            callBack();
        }

        const favoriteProducts = getLocalStorage(FAVORITE_PRODUCT_KEY);

        if (!favoriteProducts) {
            setLocalStorage(FAVORITE_PRODUCT_KEY, [
                {...product, isFavorite: 1},
            ]);
            updateFavoriteInfo();
            return true;
        }

        let hasFavoriteProduct = false;

        const updatedProducts = favoriteProducts.map((favoriteProduct) => {
            if (favoriteProduct.id === product.id) {
                hasFavoriteProduct = true;

                if (favoriteProduct.isFavorite === 1) {
                    return {
                        ...favoriteProduct,
                        isFavorite: favoriteProduct.isFavorite - 1,
                    };
                }

                if (favoriteProduct.isFavorite === 0) {
                    return {
                        ...favoriteProduct,
                        isFavorite: favoriteProduct.isFavorite + 1,
                    };
                }
            }

            return favoriteProduct;
        });

        if (hasFavoriteProduct) {
            setLocalStorage(FAVORITE_PRODUCT_KEY, updatedProducts);
            updateFavoriteInfo();
            return true;
        }

        favoriteProducts.push({...product, isFavorite: 1});

        setLocalStorage(FAVORITE_PRODUCT_KEY, favoriteProducts);
        updateFavoriteInfo();
    };

    useEffect(() => {
        updateFavoriteInfo();
    }, []);

    return (
        <>
            <Header
                onChange={changeCurrentPage}
                heartsCount={
                    !getLocalStorage(FAVORITE_PRODUCT_KEY) ? 0 : favorites
                }
            />
            <main>
                <Intro currentPage={currentPage} />
                {currentPage === "Shop" && <Shop addFavorite={addFavorite} />}
                {currentPage === "Cart" && <Cart />}
            </main>
            <Footer />
        </>
    );
}
