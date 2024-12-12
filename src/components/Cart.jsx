import Order from "./Order";
import Code from "./Code";

export default function Cart() {
    return (
        <section className="container container--cart">
            <div className="cart">
                <div className="cart__inner" id="cartInner"></div>
                <Order />
                <Code />
            </div>
        </section>
    );
}
