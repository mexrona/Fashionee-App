import {useState, useEffect} from "react";

import Header from "./components/Header";
import Intro from "./components/Intro";
import Products from "./components/Products";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

export default function App() {
    const [currentPage, setCurrentPage] = useState("Shop");

    useEffect(() => {
        document.title = currentPage;
    }, [currentPage]);

    const changeCurrentPage = (currentPage) => setCurrentPage(currentPage);

    return (
        <>
            <Header onChange={changeCurrentPage} />
            <main>
                <Intro currentPage={currentPage} />
                {currentPage === "Shop" && (
                    <>
                        <Products />
                        <Newsletter />
                    </>
                )}
                {currentPage === "Cart" && <Cart />}
            </main>
            <Footer />
        </>
    );
}
