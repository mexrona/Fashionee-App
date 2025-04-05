import Color from "./Color";

export default function Colors({colors, setColors}) {
    return (
        <div className="colors">
            <h2 className="sidebar__title">Colors</h2>
            <div className="colors__inner">
                <Color
                    colors={colors}
                    setColors={setColors}
                    data="Black"
                    value="black"
                />
                <Color
                    colors={colors}
                    setColors={setColors}
                    data="Blue"
                    value="blue"
                />
                <Color
                    colors={colors}
                    setColors={setColors}
                    data="Red"
                    value="red"
                />
                <Color
                    colors={colors}
                    setColors={setColors}
                    data="Yellow"
                    value="yellow"
                />
                <Color
                    colors={colors}
                    setColors={setColors}
                    data="Green"
                    value="green"
                />
            </div>
        </div>
    );
}
