import Color from "./Color";

export default function Colors() {
    return (
        <div className="colors">
            <h2 className="sidebar__title">Colors</h2>
            <div className="colors__inner">
                <Color data="Black" value="black" />
                <Color data="Blue" value="blue" />
                <Color data="Red" value="red" />
                <Color data="Yellow" value="yellow" />
                <Color data="Green" value="green" />
            </div>
        </div>
    );
}
