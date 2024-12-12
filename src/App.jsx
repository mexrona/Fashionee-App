import {useState} from "react";

import Header from "./components/Header";
import Intro from "./components/Intro";
import Products from "./components/Products";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

import Cart from "./components/Cart";

export default function App() {
    const [nav, setNav] = useState("Cart");

    return (
        <>
            <Header />
            <main>
                <Intro />
                {nav === "Shop" && (
                    <>
                        <Products />
                        <Newsletter />
                    </>
                )}
                {nav === "Cart" && <Cart />}
            </main>
            <Footer />
        </>
    );
}
