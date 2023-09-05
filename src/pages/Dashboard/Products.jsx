import React from "react";
import ProductTable from "./Table/ProductTable";



const Products = () => {
  return (
    <div>
      <p className="text-2xl font-black mb-8">Products</p>
      <div className="flex grid-rows-4 gap-6">
        <div className="border text-center border-green-500 rounded-lg p-4 w-[312px] h-[126px]">
          <p>Total Sales</p>
          <p className="text-2xl font-semibold">৳ 75.9k</p>
        </div>
        <div className="border text-center border-green-500 rounded-lg p-4 w-[312px] h-[126px]">
          <p>Last Month Sales</p>
          <p className="text-2xl font-semibold">৳ 75.9k</p>
        </div>
        <div className="border text-center border-green-500 rounded-lg p-4 w-[312px] h-[126px]">
          <p>Last Week Sales</p>
          <p className="text-2xl font-semibold">৳ 75.9k</p>
        </div>
        <div className="border text-center border-green-500 rounded-lg p-4 w-[312px] h-[126px]">
          <p>Recent Sales</p>
          <p className="text-2xl font-semibold">৳ 75.9k</p>
        </div>
      </div>
     <div className="mt-8">
     <ProductTable></ProductTable>
     </div>
    </div>
  );
};

export default Products;
