import {useState, useEffect} from "react";

import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Footer from "./components/Footer/Footer";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";

import {products} from "./products.json";
import {useLocalStorage} from "./hooks/useLocalStorage";

export default function App() {
    const [currentPage, setCurrentPage] = useState("Shop");

    const [heartsCount, setHeartsCount] = useState(0);

    const {setLocalStorage, getLocalStorage} = useLocalStorage();

    useEffect(() => {
        document.title = currentPage;
    }, [currentPage]);

    const changeCurrentPage = (currentPage) => setCurrentPage(currentPage);

    useEffect(() => {
        const copyOfProducts = JSON.parse(JSON.stringify(products));

        copyOfProducts.forEach((product) => {
            product.isFavorite = 0;
        });

        setLocalStorage("favorites", copyOfProducts);
    }, []);

    const addFavorites = (id) => {
        const copyOfFavoriteProducts = getLocalStorage("favorites");

        copyOfFavoriteProducts.forEach((product) => {
            if (product.id === id) {
                if (product.isFavorite === 0) {
                    product.isFavorite = 1;
                    setHeartsCount(heartsCount + 1);
                    return;
                }

                if (product.isFavorite === 1) {
                    product.isFavorite = 0;
                    setHeartsCount(heartsCount - 1);
                }
            }
        });

        setLocalStorage("favorites", copyOfFavoriteProducts);
    };

    return (
        <>
            <Header onChange={changeCurrentPage} heartsCount={heartsCount} />
            <main>
                <Intro currentPage={currentPage} />
                {currentPage === "Shop" && <Shop addFavorites={addFavorites} />}
                {currentPage === "Cart" && <Cart />}
            </main>
            <Footer />
        </>
    );
}
