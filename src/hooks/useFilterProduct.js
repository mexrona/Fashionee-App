export const useFilterProduct = () => {
    const filterProductsByFilterInfo = (products, filter) => {
        let filteredProducts = products;

        if (Object.keys(filter)) {
            if (filter.category && filter.category !== "All") {
                filteredProducts = products.filter((product) => {
                    return product.categories.includes(filter.category);
                });
            }

            if (filter.price.min) {
                filteredProducts = products.filter((product) => {
                    return product.price >= filter.price.min;
                });
            }

            if (filter.price.max) {
                filteredProducts = products.filter((product) => {
                    return product.price <= filter.price.max;
                });
            }

            if (filter.colors.length) {
                filteredProducts = products.filter((product) => {
                    return filter.colors.includes(product.color);
                });
            }

            if (
                filter.category &&
                filter.category !== "All" &&
                filter.price.min
            ) {
                filteredProducts = products.filter((product) => {
                    return (
                        product.categories.includes(filter.category) &&
                        product.price >= filter.price.min
                    );
                });
            }

            if (
                filter.category &&
                filter.category !== "All" &&
                filter.price.max
            ) {
                filteredProducts = products.filter((product) => {
                    return (
                        product.categories.includes(filter.category) &&
                        product.price <= filter.price.max
                    );
                });
            }

            if (
                filter.category &&
                filter.category !== "All" &&
                filter.colors.length
            ) {
                filteredProducts = [];

                for (let i = 0; i < products.length; i++) {
                    for (let j = 0; j < filter.colors.length; j++) {
                        if (
                            products[i].categories.includes(filter.category) &&
                            products[i].color === filter.colors[j]
                        ) {
                            filteredProducts.push(products[i]);
                        }
                    }
                }
            }

            if (filter.price.min && filter.price.max) {
                filteredProducts = products.filter((product) => {
                    return (
                        product.price >= filter.price.min &&
                        product.price <= filter.price.max
                    );
                });
            }

            if (filter.price.min && filter.colors.length) {
                filteredProducts = products.filter((product) => {
                    return (
                        product.price >= filter.price.min &&
                        filter.colors.includes(product.color)
                    );
                });
            }

            if (filter.price.max && filter.colors.length) {
                filteredProducts = products.filter((product) => {
                    return (
                        product.price <= filter.price.max &&
                        filter.colors.includes(product.color)
                    );
                });
            }

            if (
                filter.category &&
                filter.category !== "All" &&
                filter.price.min &&
                filter.price.max
            ) {
                filteredProducts = products.filter((product) => {
                    return (
                        product.categories.includes(filter.category) &&
                        product.price >= filter.price.min &&
                        product.price <= filter.price.max
                    );
                });
            }

            if (
                filter.category &&
                filter.category !== "All" &&
                filter.price.min &&
                filter.colors.length
            ) {
                filteredProducts = products.filter((product) => {
                    return (
                        product.categories.includes(filter.category) &&
                        product.price >= filter.price.min &&
                        filter.colors.includes(product.color)
                    );
                });
            }

            if (
                filter.category &&
                filter.category !== "All" &&
                filter.price.max &&
                filter.colors.length
            ) {
                filteredProducts = products.filter((product) => {
                    return (
                        product.categories.includes(filter.category) &&
                        product.price <= filter.price.max &&
                        filter.colors.includes(product.color)
                    );
                });
            }

            if (filter.price.min && filter.price.max && filter.colors.length) {
                filteredProducts = products.filter((product) => {
                    return (
                        product.price >= filter.price.min &&
                        product.price <= filter.price.max &&
                        filter.colors.includes(product.color)
                    );
                });
            }

            if (
                filter.category &&
                filter.category !== "All" &&
                filter.price.min &&
                filter.price.max &&
                filter.colors.length
            ) {
                filteredProducts = products.filter((product) => {
                    return (
                        product.categories.includes(filter.category) &&
                        product.price >= filter.price.min &&
                        product.price <= filter.price.max &&
                        filter.colors.includes(product.color)
                    );
                });
            }

            if (filter.category && filter.category === "All") {
                filteredProducts = products;
            }
        }

        return filteredProducts;
    };

    return {filterProductsByFilterInfo};
};
