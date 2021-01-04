import { useProducts } from "./ProductProvider.js"
import { useProductTypes } from "./ProductTypeProvider.js"
import { Product } from "./Product.js"

const contentTarget = document.querySelector(".products")

export const ProductList = () => {
    // Get a reference to both arrays
    const products = useProducts()
    const productTypes = useProductTypes()

    // Iterate the array of products with .map()
    const arrayOfProductHTMLRepresentations = products.map(product => {

        /*
            Find the type for this product by using the .find()
            method on the product type array
        */
        const type = productTypes.find(type => type.id === product.productTypeId)

        // Build HTML representation of a product
        const html = Product(product, type) //give both objects to our html maker

        return html //html is a string
    })

    const stringOfAllRepresentations = arrayOfProductHTMLRepresentations.join("")

    contentTarget.innerHTML = stringOfAllRepresentations
}

