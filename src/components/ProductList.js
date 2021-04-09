import React, { useState } from "react";
import Product from "./Product";
import Title from "./Title";
import { storeProducts } from "../data";
import { ProductConsumer } from "../components/Context";

function ProductList() {
  const [products, setProducts] = useState(storeProducts);

  return (
    <React.Fragment>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row">
            <ProductConsumer>
              {(value) => {
                return value.products.map(product => {
                  return <Product key={product.id} product={product} />
                })
              }}
            </ProductConsumer>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProductList;
