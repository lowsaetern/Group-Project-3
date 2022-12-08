import product_01 from "../images/products/product_1.jpg";
import product_02 from "../images/products/product_2.jpg";
import product_03 from "../images/products/product_3.jpg";
import product_04 from "../images/products/product_4.jpg";
import product_05 from "../images/products/product_5.jpg";
import product_06 from "../images/products/product_6.jpg";
import product_07 from "../images/products/product_7.jpg";
import product_08 from "../images/products/product_8.jpg";
import product_09 from "../images/products/product_9.jpg";
import product_10 from "../images/products/product_10.jpg";
import product_11 from "../images/products/product_11.jpg";
import product_12 from "../images/products/product_12.jpg";
import product_13 from "../images/products/product_13.jpg";
import product_14 from "../images/products/product_14.jpg";
import product_15 from "../images/products/product_15.jpg";
import product_16 from "../images/products/product_16.jpg";
import product_17 from "../images/products/product_17.jpg";
import product_18 from "../images/products/product_18.jpg";
import product_19 from "../images/products/product_19.jpg";
import product_20 from "../images/products/product_20.jpg";

const products = [
  {
    title: "Orange Top",
    price: "15.99",
    image01: product_01,
    categorySlug: "shirt",
    slug: "shirt",
    size: ["s"],
    colors: "orange",
  },
  {
    title: "Jean Vest",
    price: "13.99",
    image01: product_02,
    categorySlug: "jacket",
    slug: "jacket",
    size: ["m"],
    colors: ["blue"],
  },
  {
    title: "Jean Jacket",
    price: "16.99",
    image01: product_03,
    categorySlug: "jacket",
    slug: "jacket",
    size: ["l"],
    colors: ["blue"],

  },
  {
    title: "Green Overcoat",
    price: "24.99",
    image01: product_04,
    categorySlug: "jacket",
    slug: "jacket",
    size: ["m" ],
    colors: ["green"],

  },{
    title: "Banana Republic Jeans",
    price: "18.99",
    image01: product_05,
    categorySlug: "jeans",
    slug: "jeans",
    size: ["s"],
    colors: ["blue"],
  },
  {
    title: "Black Dress",
    price: "10.99",
    image01: product_06,
    categorySlug: "dress",
    slug: "dress",
    size: ["m"],
    colors: ["black"],
  },
  {
    title: "Black Jeans",
    price: "12.99",
    image01: product_07,
    categorySlug: "jeans",
    slug: "jeans",
    size: ["m"],
    colors: ["black"],

  },
  {
    title: "Light Blue Blazer",
    price: "24.99",
    image01: product_08,
    categorySlug: "jacket",
    slug: "jacket",
    size: ["m" ],
    colors: ["blue"],

  },
  {
    title: "Nude Overcoat",
    price: "29.99",
    image01: product_09,
    categorySlug: "jacket",
    slug: "jacket",
    size: ["s"],
    colors: ["brown"],
  },
  {
    title: "Burgundy Dress",
    price: "27.99",
    image01: product_10,
    categorySlug: "dress",
    slug: "dress",
    size: ["m"],
    colors: ["red"],
  },
  {
    title: "All Black Jeans",
    price: "16.99",
    image01: product_11,
    categorySlug: "jeans",
    slug: "jeans",
    size: ["s"],
    colors: ["black"],

  },
  {
    title: "Brown Jacket",
    price: "22.99",
    image01: product_12,
    categorySlug: "jacket",
    slug: "jacket",
    size: ["l" ],
    colors: ["brown"],

  },
  {
    title: "Yellow Fuzzy",
    price: "18.99",
    image01: product_13,
    categorySlug: "jacket",
    slug: "jacket",
    size: ["s"],
    colors: ["yellow"],
  },
  {
    title: "Black Sweater",
    price: "20.99",
    image01: product_14,
    categorySlug: "jacket",
    slug: "jacket",
    size: ["m"],
    colors: ["black"],
  },
  {
    title: "Striped Blouse",
    price: "14.99",
    image01: product_15,
    categorySlug: "shirt",
    slug: "shirt",
    size: ["l"],
    colors: ["brown"],

  },
  {
    title: "Red Dress",
    price: "27.99",
    image01: product_16,
    categorySlug: "dress",
    slug: "dress",
    size: ["m" ],
    colors: ["red"],

  },
  {
    title: "Sage Fuzzy",
    price: "19.99",
    image01: product_17,
    categorySlug: "jacket",
    slug: "jacket",
    size: ["l"],
    colors: ["green"],
  },
  {
    title: "Northern Crewneck",
    price: "13.99",
    image01: product_18,
    categorySlug: "jacket",
    slug: "jacket",
    size: ["m"],
    colors: ["black"],
  },
  {
    title: "Striped Sweater",
    price: "8.99",
    image01: product_19,
    categorySlug: "jacket",
    slug: "jacket",
    size: ["l"],
    colors: ["blue, red, brown"],

  },
  {
    title: "Black Quarterzip",
    price: "24.99",
    image01: product_20,
    categorySlug: "jacket",
    slug: "jacket",
    size: ["s" ],
    colors: ["black"],

  },



];
const getAllProducts = () => products;

const getProducts = (count) => {
  const max = products.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return products.slice(start, start + count);
};

const getProductBySlug = (slug) => products.find((e) => e.slug === slug);

const getCartItemsInfo = (cartItems) => {
  let res = [];
  if (cartItems.length > 0) {
    cartItems.forEach((e) => {
      let product = getProductBySlug(e.slug);
      res.push({
        ...e,
        product: product,
      });
    });
  }

  return res.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
};

const productData = {
  getAllProducts,
  getProducts,
  getProductBySlug,
  getCartItemsInfo,
};

export default productData;
