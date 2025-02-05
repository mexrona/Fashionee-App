export default function CatalogHeart({id, addFavorites}) {
    return (
        <div className="catalog__heart" onClick={() => addFavorites(id)}>
            <img src="../public/images/icons/heart.png" alt="Wishlist" />
        </div>
    );
}
