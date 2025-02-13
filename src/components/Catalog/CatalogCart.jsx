import CatalogHeart from "./CatalogHeart";

export default function CatalogCart({
    image,
    name,
    isSale,
    isNew,
    oldPrice,
    price,
    id,
    addFavorite,
    product,
}) {
    return (
        <div className="catalog__item">
            <a
                href="#"
                className="catalog__preview"
                onClick={(event) => event.preventDefault()}>
                <img src={image} alt={name} className="catalog__img" />
            </a>
            {isSale && (
                <div className="catalog__status catalog__status--sale">
                    Sale
                </div>
            )}
            {isNew && (
                <div className="catalog__status catalog__status--new">New</div>
            )}
            <CatalogHeart addFavorite={addFavorite} product={product} />
            <a href="#" className="catalog__name">
                {name}
            </a>
            <div className="catalog__price">
                {oldPrice && <div className="catalog__old">${oldPrice}</div>}
                <div className="catalog__new">${price}</div>
            </div>
            <button className="catalog__buy" id={id}>
                Купить
            </button>
        </div>
    );
}
