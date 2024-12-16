import {useState} from "react";

import Header from "./components/Header";
import Intro from "./components/Intro";
import Products from "./components/Products";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

export default function App() {
    const [nav, setNav] = useState("Shop");

    document.getElementsByTagName("title")[0].innerHTML = nav;

    return (
        <>
            <Header onChange={(current) => setNav(current)} />
            <main>
                <Intro nav={nav} />
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
