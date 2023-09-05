import React from "react";
import { Icon } from '@iconify/react';

const AddProducts = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Add Products</h1>
      <div className="flex gap-8">

       <div>
       <div className="">
          <label className="font-semibold">Product Name</label> <br />
          <input
            className="border w-[560px] border-purple-200 mt-3 p-3 "
            type="text"
            name=""
            placeholder="Core i7 5th gen Leptop"
            id=""
          />
        </div> 
       <div className="flex gap-6 mt-6">
       <div>
              <label className="font-semibold">Product SKU</label> <br />
              <input
                className="border w-[270px]  border-purple-200 p-3 mt-3"
                type="text"
                name=""
                placeholder="MEGA-JEWE-177-1"
                id=""
              />
            </div>
            <div>
              <label className="font-semibold">Product Quantity</label> <br />
              <input
                className="border text-center w-[270px] border-purple-200 p-3 mt-3"
                type="text"
                name=""
                placeholder="10,000"
                id=""
              />
            </div>
       </div>
       <div className="flex gap-6 mt-6">
       <div>
              <label className="font-semibold">Product  Regular Price</label> <br />
              <input
                className="border text-center w-[270px] border-purple-200 p-3 mt-3"
                type="text"
                name=""
                placeholder="1250 ৳ "
                id=""
              />
            </div>
            <div>
              <label className="font-semibold">Discount Percentage</label> <br />
              <input
                className="border text-center w-[270px] border-purple-200 p-3 mt-3"
                type="text"
                name=""
                placeholder="10%"
                id=""
              />
            </div>
       </div>
       <div className="flex gap-6 mt-6">
       <div>
              <label className="font-semibold">Free Delivery</label> <br />
              <input
                className="border text-center w-[270px] border-purple-200 bg-gray-700 text-white p-3 mt-3"
                type="text"
                name=""
                placeholder="Free Delivery"
                id=""
              />
            </div>
            <div>
              <label className="font-semibold">Paid Delivery</label> <br />
              <input
                className="border text-center w-[270px] border-purple-200 p-3 mt-3"
                type="text"
                name=""
                placeholder="Paid Delivery              "
                id=""
              />
            </div>
       </div>

       <div className="mt-6">
          <label className="font-semibold">Mega Offer Name</label> <br />
          <input
            className="border justify-between border-purple-200 w-[560px]  mt-2 p-3 "
            type="text"
            name=""
            placeholder="Eid Festival Mega offer   "
            id=""
          />
        </div>

            <div className="mt-6">
            <label className="font-semibold mb-3">Paid Delivery</label> <br />
            <thead>
          <tr>
            <th className="border border-green-600 py-3">Size</th>
            <th className="border border-green-600 py-3">Chest</th>
            <th className="border border-green-600 py-3">Waist              </th>
            <th className="border border-green-600 py-3">Waist
            <Icon icon="streamline:interface-add-2-remove-bold-cross-buttons-button-add-plus" /></th>
        
          </tr>
        </thead>
            </div>
       </div>


      {/* secon ............ */}
        <div>
          <div className="flex gap-6">
            <div>
              <label className=" font-semibold">Product Image</label> <br />
              <input
                className="border w-[270px] border-purple-200 p-3 mt-3"
                type="text"
                name=""
                placeholder="Image.jpg"
                id=""
              />
            </div>
            <div>
              <label className=" font-semibold">Product Brand   </label> <br />
              <input
                className="border border-purple-200 w-[270px] p-3 mt-3"
                type="text"
                name=""
                placeholder="Apex,Bata"
                id=""
              />
            </div>
          </div>
          <div className="flex gap-6 mt-6">
            <div>
              <label className=" font-semibold">Product Category</label> <br />
              <input
                className="border border-purple-200  w-[270px] p-3 mt-3 "
                type="text"
                name=""
                placeholder="MEGA-JEWE-177-1"
                id=""
              />
            </div>
            <div>
              <label className="font-semibold">Product Sub Category</label> <br />
              <input
                className="border border-purple-200 w-[270px] p-3 mt-3"
                type="text"
                name=""
                placeholder="MEGA-JEWE-177-1 "
                id=""
              />
            </div>
          </div>
          <div className="flex gap-6 mt-6">
            <div>
              <label className=" font-semibold">Discount Amount</label> <br />
              <input
                className="border border-purple-200 w-[270px] p-3 mt-3"
                type="text"
                name=""
                placeholder="125 ৳"
                id=""
              />
            </div>
            <div>
              <label className=" font-semibold">New Discount Price</label> <br /> 
              <input
                className="border border-purple-200 w-[270px] p-3 mt-3"
                type="text"
                name=""
                placeholder="1125 ৳"
                id=""
              />
            </div>
          </div>
          <div className="flex gap-6 mt-6">
            <div>
              <label className=" font-semibold">Inside Area </label> <br />
              <input
                className="border border-purple-200 w-[270px] p-3 mt-3"
                type="text"
                name=""
                placeholder="60 ৳ "
                id=""
              />
            </div>
            <div>
              <label className=" font-semibold">Out Side Area</label> <br />
              <input
                className="border border-purple-200 w-[270px] p-3 mt-3"
                type="text"
                name=""
                placeholder="100 ৳ "
                id=""
              />
            </div>
          </div>
          <div className="flex gap-6 mt-6">
            <div>
              <label className=" font-semibold">Start Date</label> <br />
              <input
                className="border border-purple-200 w-[270px] p-3 mt-3"
                type="text"
                name=""
                placeholder="12.00 am 29 July 2023  "
                id=""
              />
            </div>
            <div>
              <label className=" font-semibold">Ending Date</label> <br />
              <input
                className="border border-purple-200 w-[270px] p-3 mt-3"
                type="text"
                name=""
                placeholder="12.00 am 07 Aug 2023 "
                id=""
              />
            </div>
          </div>

          <div className="mt-6">
          <label className=" font-semibold">Product Name</label> <br />
          <input
            className="border border-purple-200 justify-between w-[560px]  mt-2 p-3 "
            type="text"
            name=""
            placeholder="icon"
            id=""
          />
        </div>

        </div>
      </div>
    </div>
  );
};

export default AddProducts;
