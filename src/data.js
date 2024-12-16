import _1shoes from "./assets/Shoes/pexels-chuck-3261068.jpg";
import _2shoes from "./assets/Shoes/pexels-cottonbro-6594253.jpg";
import _3shoes from "./assets/Shoes/pexels-hurrahsuhail-11324547.jpg";
import _4shoes from "./assets/Shoes/pexels-omar-markhieh-637410-1447262.jpg";
import _5shoes from "./assets/Shoes/pexels-webdonut-19090.jpg";

import _1shirt from "./assets/TShirts/ai-generated-8520248_1280.jpg";
import _2shirt from "./assets/TShirts/ai-generated-8520240_1280.jpg";
import _3shirt from "./assets/TShirts/jeans-1234687_1280.jpg";
import _4shirt from "./assets/TShirts/ai-generated-8751040_1280.png";
import _5shirt from "./assets/TShirts/tshirt-8726721_1280.jpg";

import _1jeans from "./assets/Jeans/pexels-bianeyre-2363825.jpg";
import _2jeans from "./assets/Jeans/pexels-godisable-jacob-226636-1346187.jpg";
import _3jeans from "./assets/Jeans/pexels-heitorverdifotos-2343661.jpg";
import _4jeans from "./assets/Jeans/pexels-mahe-haroutinian-322834-1804075.jpg";
import _5jeans from "./assets/Jeans/pexels-miyatavictor-1957154.jpg";

import _1shirts from "./assets/Shirts/pexels-cottonbro-6069563.jpg";
import _2shirts from "./assets/Shirts/pexels-gabrielapereiraph-2635315.jpg";
import _3shirts from "./assets/Shirts/pexels-jeffreyreed-769732.jpg";
import _4shirts from "./assets/Shirts/pexels-ron-lach-10558182.jpg";
import _5shirts from "./assets/Shirts/pexels-shkrabaanthony-5893860.jpg";

const min = 1000;
const max = 2000;

export const Card = [
  {
    id: 11,
    shirts: _1shoes,
    Title: "Shoes1",
    price: Math.floor(Math.random() * (max - min) + min),
    description:
      "The **Nike Air Max 270** is a stylish, lightweight shoe designed for all-day comfort with its breathable mesh upper and the largest Air Max heel unit for exceptional cushioning. Its durable rubber sole provides great traction, while the sleek design and versatile color options make it perfect for casual wear or light activity.",
      counter: 1,
  },
  {
    id: 12,
    shirts: _2shoes,
    Title: "Shoes2",
    price: Math.floor(Math.random() * (max - min) + min),
    description:
      "The New Balance 990v5 blends classic style with modern comfort, featuring a supportive suede and mesh upper. The ENCAP midsole cushioning provides excellent support, while the rubber outsole ensures long-lasting durability. A versatile sneaker for everyday wear with a focus on comfort and stability",
      counter: 1,
  },
  {
    id: 13,
    shirts: _3shoes,
    Title: "Shoes3",
    price: Math.floor(Math.random() * (max - min) + min),
    description:
      "The Under Armour HOVR Phantom 2 delivers a smooth, responsive ride with its HOVR cushioning technology. The knit upper is flexible and breathable, while the rubber sole provides excellent traction. A stylish, performance-driven shoe for runners and fitness enthusiasts alike.",
      counter: 1,
  },
  {
    id: 14,
    shirts: _4shoes,
    Title: "Shoes4",
    price: Math.floor(Math.random() * (max - min) + min),
    description: "The Under Armour HOVR Phantom 2 delivers a smooth, responsive ride with its HOVR cushioning technology. The knit upper is flexible and breathable, while the rubber sole provides excellent traction. A stylish, performance-driven shoe for runners and fitness enthusiasts alike.",
    counter: 1,
  },
  {
    id: 15,
    shirts: _5shoes,
    Title: "Shoes5",
    price: Math.floor(Math.random() * (max - min) + min),
    description: "The Reebok Nano X2 is built for versatile performance, offering a durable, flexible design for both training and running. Its breathable mesh upper and cushioned midsole ensure comfort, while the rubber outsole provides excellent grip and stability. A reliable choice for active individuals.",
    counter: 1,
  },
];

export const Card1 = [
  {
    id: 21,
    shirts: _1shirts,
    Title: "Shirts1",
    price: Math.floor(Math.random() * (max - min) + min),
    counter: 1,
    description: "This classic button-up shirt is crafted from soft cotton, offering a comfortable fit. Its sleek design makes it perfect for both casual and formal occasions, while the breathable fabric ensures all-day comfort."

  },
  {
    id: 22,
    shirts: _2shirts,
    Title: "Shirts2",
    price: Math.floor(Math.random() * (max - min) + min),
    counter: 1,
    description : "Featuring a modern slim-fit design, this shirt is ideal for those who appreciate both style and comfort. The breathable fabric keeps you cool, while the crisp finish adds a polished touch to any outfit."

  },
  {
    id: 23,
    shirts: _3shirts,
    Title: "Shirts3",
    price: Math.floor(Math.random() * (max - min) + min),
    counter: 1,
    description: "Elevate your wardrobe with this stylish shirt, designed for both comfort and versatility. Made from high-quality cotton, it’s perfect for a day at the office or a casual outing, combining fashion and functionality."

  },
  {
    id: 24,
    shirts: _4shirts,
    Title: "Shirts4",
    price: Math.floor(Math.random() * (max - min) + min),
    counter: 1,
    description: "A wardrobe staple, this shirt combines a classic fit with contemporary style. Made from soft, durable fabric, it’s ideal for daily wear, providing comfort without sacrificing on style, whether dressed up or down."

  },
  {
    id: 25,
    shirts: _5shirts,
    Title: "Shirts5",
    price: Math.floor(Math.random() * (max - min) + min),
    counter: 1,
    description: "This effortlessly stylish shirt offers a tailored fit that flatters any body type. Made from breathable fabric, it’s perfect for layering or wearing on its own for a polished look throughout the day."

  },
];

export const Card2 = [
  {
    id: 31,
    shirts: _1jeans,
    Title: "Jeans1",
    price: Math.floor(Math.random() * (max - min) + min),
    counter: 1,
    description: "These slim-fit jeans offer a modern look with a comfortable fit. Made from durable denim, they’re designed to stretch and move with you, providing all-day comfort while maintaining their shape and style."

  },
  {
    id: 32,
    shirts: _2jeans,
    Title: "Jeans2",
    price: Math.floor(Math.random() * (max - min) + min),
    counter: 1,
    description: "A perfect blend of style and comfort, these jeans are crafted from high-quality denim that molds to your body. The classic design pairs effortlessly with any top, making them a versatile addition to any wardrobe."

  },
  {
    id: 33,
    shirts: _3jeans,
    Title: "Jeans3",
    price: Math.floor(Math.random() * (max - min) + min),
    counter: 1,
    description: "These versatile jeans feature a timeless design, perfect for any casual occasion. Made from premium denim, they offer a relaxed fit with just the right amount of stretch for maximum comfort throughout the day."

  },
  {
    id: 34,
    shirts: _4jeans,
    Title: "Jeans4",
    price: Math.floor(Math.random() * (max - min) + min),
    counter: 1,
    description: "Step up your fashion game with these stylish jeans, designed to fit comfortably while keeping you on trend. Made from high-quality denim, they provide durability, flexibility, and a sleek look for everyday wear."

  },
  {
    id: 35,
    shirts: _5jeans,
    Title: "Jeans5",
    price: Math.floor(Math.random() * (max - min) + min),
    counter: 1,
    description: "A wardrobe essential, these jeans offer a perfect balance of comfort and style. With a modern fit and premium denim, they’re designed to keep you looking great and feeling confident wherever you go."

  },
];
export const Card3 = [
  {
    id: 41,
    shirts: _1shirt,
    Title: "T-Shirt1",
    price: Math.floor(Math.random() * (max - min) + min),
    counter: 1,
    description: "This classic T-shirt is made from soft cotton, providing a relaxed fit and breathable comfort. Its simple design makes it a versatile addition to any wardrobe, perfect for layering or wearing solo on casual days."

  },
  {
    id: 42,
    shirts: _2shirt,
    Title: "T-Shirt2",
    price: Math.floor(Math.random() * (max - min) + min),
    counter: 1,
    description: "Featuring a stylish graphic print, this T-shirt adds a fun touch to your casual wear. Crafted from soft cotton, it’s lightweight and breathable, making it the perfect go-to for everyday comfort and style."

  },
  {
    id: 43,
    shirts: _3shirt,
    Title: "T-Shirt3",
    price: Math.floor(Math.random() * (max - min) + min),
    counter: 1,
    description: "Made from 100% cotton, this T-shirt offers a soft, comfortable fit. The timeless design makes it easy to pair with any outfit, providing a simple yet stylish option for casual days or weekend adventures."

  },
  {
    id: 44,
    shirts: _4shirt,
    Title: "T-Shirt4",
    price: Math.floor(Math.random() * (max - min) + min),
    counter: 1,
    description: "This lightweight T-shirt is designed for ultimate comfort, made from soft cotton to keep you cool throughout the day. Its minimalist style makes it easy to mix and match with jeans, shorts, or layers."

  },
  {
    id: 45,
    shirts: _5shirt,
    Title: "T-Shirt5",
    price: Math.floor(Math.random() * (max - min) + min),
    counter: 1,
    description: "Elevate your casual look with this comfortable T-shirt, crafted from premium cotton. Whether worn alone or layered, it’s designed to provide a perfect fit and soft feel, ideal for everyday wear or relaxed outings."

  },
];
