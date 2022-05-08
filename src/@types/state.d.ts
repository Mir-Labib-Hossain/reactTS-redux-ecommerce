interface IProduct {
  product: {
    id: number;
    image: string;
    title: string;
    category: string;
    description: string;
    price: number;
    rating: {
      count: number;
      rate: number;
    };
  };
}
interface IProducts {
  products: [product];
}

interface IProductsReducer extends IProducts {
  productReducer: {
    products: products;
  };
}

interface ISelectedProductReducer extends IProduct {
    selectedProductReducer: {
      product: product;
    };
  }
