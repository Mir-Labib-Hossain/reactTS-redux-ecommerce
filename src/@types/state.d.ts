interface IState {
  selectedProductReducer: ISelectedProductReducer;
  productReducer: IPproductReducer;
}

interface IProduct {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
  price: number;
  rating: IRating;
}

interface IRating {
  count: number;
  rate: number;
}

// interface IProducts {
//   products: IProduct[];
// }

type IProducts = IProduct[];

interface IProductsReducer {
  products: IProducts;
}

interface ISelectedProductReducer {
  product: IProduct;
}
