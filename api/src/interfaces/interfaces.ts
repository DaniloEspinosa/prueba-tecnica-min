export interface GroceryItem {
  id: string;
  image_url: string;
  stock: number;
  productName: string;
  price: number;
  productDescription: string;
  favorite: number | string;
}

export interface Database {
  grocery: GroceryItem[];
}

export interface Params {
  id: string;
}