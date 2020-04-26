/**
 * Given a list of ordered products, write a function that returns an array with the Kth most sold products,
 * in time O(n*log(n))
 */

import { Sort } from "../src/Sort";
import { Equality } from "../src/Equality";
import { BinaryHeap } from "../src/BinaryHeap";

/**
 * List of ordered products (FAKE DATA)
 */
const orders = [
  "YEEZY BOOST 700 MNVN",
  "YEEZY BOOST 700 MNVN",
  "YEEZY BOOST 350 V2 ZEBRA",
  "YEEZY BOOST 700 MNVN",
  "Superstar",
  "YEEZY BOOST 700 MNVN",
  "YEEZY BOOST 700 MNVN",
  "YEEZY BOOST 350 V2 ZEBRA",
  "YEEZY BOOST 700 MNVN",
  "YEEZY 500 UTILITY BLACK",
  "YEEZY BOOST 700 MNVN",
  "YEEZY BOOST 350 V2 ZEBRA",
  "YEEZY BOOST 700 MNVN",
  "YEEZY BOOST 350 V2 ZEBRA",
  "YEEZY BOOST 350 V2 ZEBRA",
  "YEEZY BOOST 700 MNVN",
  "YEEZY BOOST 700 MNVN",
  "YEEZY BOOST 700 MNVN",
  "YEEZY BOOST 350 V2 ZEBRA",
  "YEEZY BOOST 350 V2 ZEBRA",
  "YEEZY BOOST 350 V2 ZEBRA",
  "YEEZY BOOST 350 V2 ZEBRA",
  "YEEZY BOOST 700 MNVN",
  "YEEZY BOOST 700 MNVN",
  "YEEZY 500 UTILITY BLACK",
  "Superstar",
  "YEEZY BOOST 700 MNVN",
  "YEEZY BOOST 700 MNVN",
  "Superstar",
  "YEEZY BOOST 350 V2 ZEBRA",
  "YEEZY 500 UTILITY BLACK",
  "Ultraboost 19",
  "YEEZY 500 UTILITY BLACK",
  "YEEZY BOOST 350 V2 ZEBRA",
  "YEEZY BOOST 350 V2 ZEBRA",
  "YEEZY 500 UTILITY BLACK",
  "YEEZY BOOST 350 V2 ZEBRA",
  "Ultraboost 20",
  "YEEZY BOOST 350 V2 ZEBRA",
  "YEEZY BOOST 700 MNVN",
  "YEEZY 500 UTILITY BLACK",
  "YEEZY 500 UTILITY BLACK",
  "YEEZY BOOST 350 V2 ZEBRA",
  "YEEZY BOOST 700 MNVN",
  "YEEZY BOOST 350 V2 ZEBRA",
  "YEEZY BOOST 700 MNVN",
  "Ultraboost 20",
  "YEEZY BOOST 700 MNVN",
  "YEEZY BOOST 350 V2 ZEBRA",
  "Ultraboost 20",
  "YEEZY BOOST 350 V2 ZEBRA",
  "YEEZY 500 UTILITY BLACK",
  "YEEZY BOOST 350 V2 ZEBRA",
  "Superstar",
  "YEEZY BOOST 350 V2 ZEBRA",
  "YEEZY BOOST 700 MNVN",
  "YEEZY 500 UTILITY BLACK",
  "YEEZY BOOST 700 MNVN",
  "YEEZY BOOST 350 V2 ZEBRA",
  "YEEZY BOOST 700 MNVN",
  "YEEZY BOOST 350 V2 ZEBRA",
  "YEEZY BOOST 350 V2 ZEBRA",
  "YEEZY BOOST 700 MNVN",
  "YEEZY BOOST 700 MNVN",
  "YEEZY BOOST 700 MNVN",
  "YEEZY BOOST 350 V2 ZEBRA",
  "YEEZY BOOST 350 V2 ZEBRA",
  "YEEZY BOOST 700 MNVN",
  "Ultraboost 20",
  "YEEZY BOOST 350 V2 ZEBRA",
  "Ultraboost 20",
  "YEEZY BOOST 700 MNVN",
  "YEEZY 500 UTILITY BLACK",
  "YEEZY BOOST 700 MNVN",
  "YEEZY 500 UTILITY BLACK",
  "YEEZY BOOST 350 V2 ZEBRA",
  "Superstar",
  "YEEZY BOOST 350 V2 ZEBRA",
  "Superstar",
  "YEEZY 500 UTILITY BLACK",
  "YEEZY 500 UTILITY BLACK",
  "Superstar",
  "YEEZY BOOST 350 V2 ZEBRA",
  "Ultraboost 20",
  "YEEZY 500 UTILITY BLACK",
  "YEEZY BOOST 350 V2 ZEBRA",
  "YEEZY BOOST 350 V2 ZEBRA",
  "YEEZY BOOST 700 MNVN",
  "YEEZY BOOST 350 V2 ZEBRA",
  "YEEZY BOOST 350 V2 ZEBRA",
  "YEEZY BOOST 350 V2 ZEBRA",
  "YEEZY 500 UTILITY BLACK",
  "YEEZY BOOST 350 V2 ZEBRA",
  "Superstar",
  "YEEZY BOOST 700 MNVN",
  "YEEZY BOOST 700 MNVN",
  "YEEZY BOOST 700 MNVN",
  "YEEZY BOOST 350 V2 ZEBRA",
  "YEEZY BOOST 350 V2 ZEBRA",
  "YEEZY 500 UTILITY BLACK",
  "YEEZY 500 UTILITY BLACK",
  "Superstar",
];

interface SoldProduct {
  name: string;
  timesSold: number;
}

/**
 * Returns array containing k most sold products
 * @param k numer of products to return
 */
function getKthMostSoldProducts(
  k: number,
  orderedProducts: string[]
): SoldProduct[] {
  // Gets hash with product names and times sold
  const soldProductsHash = getSoldProductsHash(orderedProducts);

  // Creates binary heap
  const sortFunction: Sort<SoldProduct> = (a, b) => a.timesSold > b.timesSold;
  const equalityFunction: Equality<SoldProduct> = (a, b) => a.name === b.name;
  const heap = new BinaryHeap(sortFunction, equalityFunction);

  // Adds Sold Products to binary heap
  Object.keys(soldProductsHash).forEach((name) => {
    heap.push({
      name,
      timesSold: soldProductsHash[name],
    });
  });

  // Gets Kth most sold products
  let result: SoldProduct[] = [];
  let index = k;
  while (index > 0) {
    const product = heap.pop();
    if (product) {
      result.push(product);
    }
    index--;
  }

  return result;
}

/*
 * Returns a Hashmap with key: name of product and value: times sold
 */
function getSoldProductsHash(
  orderedProducts: string[]
): Record<string, number> {
  const hash: Record<string, number> = {};
  orderedProducts.forEach((product) => {
    if (!hash[product]) {
      hash[product] = 0;
    }
    hash[product] = hash[product] + 1;
  });
  return hash;
}

// Result
console.log(getKthMostSoldProducts(3, orders));
