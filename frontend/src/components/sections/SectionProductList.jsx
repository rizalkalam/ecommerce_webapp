import React from "react";
import ProductCard from "../common/ProductCard";

export default function SectionProductList({ title, products, onViewAll, sectionKey }) {
  return (
    <div className={sectionKey}>
      <p className="sec-title">{title}</p>
      <div className="content-product">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <div className="btn-viewall" onClick={() => onViewAll(sectionKey)}>
        <p>View All</p>
      </div>
    </div>
  );
}