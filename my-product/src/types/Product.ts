export interface Product {
  num: number;
  name: string;
  price: number;
  amount: number;
}

export type Product1 = Omit<Product, "num">;
