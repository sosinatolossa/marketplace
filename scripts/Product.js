export const Product = (product, type) => {
    return `
        <section class="product">
            <header>
                <h2 class="red">${product.name}</h2>
            </header>
            <div>
                Price $${product.price}
            </div>
            <div>
                In category ${type.name}
            </div>
        </section>
    `
}

