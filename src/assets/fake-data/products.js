import product_01 from '../images/products/product_1.jpg';
import product_02 from '../images/products/product_2.jpg';
import product_03 from '../images/products/product_3.jpg';

const products = [
    {
        title: "For Sale",
        price: '15.99',
        image01: product_01,
        categorySlug: "shirt",
        slug: "Tshirt",
        size: ["s", "m", "l", "xl"]
    },
    {
            title: "Not for sale",
            price: '13.99',
            image01: product_02,
            categorySlug: "shirt",
            slug: "Tshirt",
            size: ["s", "m", "l", "xl"]
        },
        {
                title: "Black Shirt",
                price: '16.99',
                image01: product_03,
                categorySlug: "shirt",
                slug: "Tshirt",
                size: ["s", "m", "l", "xl"]
        },
    ]
    const getAllProducts = () => products

    const getProducts = (count) => {
        const max = products.length - count
        const min = 0
        const start = Math.floor(Math.random() * (max - min) + min)
        return products.slice(start, start + count)
    }
    
    const productData = {
        getAllProducts,
        getProducts
    }
    export default productData