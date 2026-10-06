import product1 from "../assets/coach-tabbys-wedge-shoes.jpg";
import product2 from "../assets/jeans.jpg";
import product3 from "../assets/pink-babydoll-top.jpg";
import product4 from "../assets/pink-zebra-pattern-sunglasses.jpg";
import product5 from "../assets/Skull-vectorbloom-top.jpg";
import product6 from "../assets/vectorbloom-foldover.jpg";

const products = [
  {
  id: 1,
  name: "Coach Tabby Wedge Shoes",
  price: 1500000,
  image: product1,
  stock: 10,
  description: "Chic and cute! perfect for a walk at the beach, the mall, craft shop, ANYWHERE!",
  specifications: {
    Category: "Shoes",
    Brand: "Coach",
    Color: "Black",
    Material: "Leather",
  },
},
  {
    id: 2,
    name: "Capri jeans",
    price: 450000,
    image: product2,
    stock: 20,
    description: "The legendary capri pants, in jeans! Perfect to stay chic in the humid summer.",
    specifications: {
      Brand: "Levi",
      Color: "Washed Blue",
      Material: "Jeans",
    },
  },
  {
    id: 3,
    name: "Pink Babydoll Top",
    price: 250000,
    image: product3,
    stock: 14,
    description: "Pink, cute, and sweet! Be the personification of a cotton candy with this cotton made babydoll top.",
    specifications: {
      Brand: "Hollister",
      Color: "Pink",
      Material: "Cotton, Polyester",
    },
  },
  {
    id: 4,
    name: "Pink Zebra Pattern Sunglasses",
    price: 75000,
    image: product4,
    stock: 93,
    description: "No more hurting your eyes with this pair of hilton-esque sunglasses.",
    specifications: {
      Brand: "Zara",
      Color: "Black, Pink",
      Material: "Plastic",
    },
  },
  {
    id: 5,
    name: "Skull Vectorbloom Top",
    price: 450000,
    image: product5,
    stock: 45,
    description: "Are you trying to look mysterious and sexy? Skull vectorbloom will make you look as cold as an iceberg. Now even the god of death will praise your fashion sense.",
    specifications: {
      Brand: "Abercrombie & Fitch",
      Color: "Black, Blue, Teal",
      Material: "Cotton, Polyester",
    },
  },
  {
    id: 6,
    name: "Vectorbloom Foldover Pants",
    price: 150000,
    image: product6,
    stock: 23,
    description: "Too tired to dress up? Try this one! Be chic without trying at all. Hannah Montana would loveeee you.",
    specifications: {
      Brand: "Abercrombie & Fitch",
      Color: "Black, Pink",
      Material: "Spandex, Cotton",
    },
  },
];

export default products;