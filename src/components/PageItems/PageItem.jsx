import React from "react";

const PageItem = ({ item }) => {
  const { id, image, title, price, description } = item;



  return (
    <>

      <figure><img src={image} alt="Shoes" className="w-full object-contain h-48" /></figure>
      <div class="card-body mt-3">
        <h2 class="card-title text-base lg:text-lg xl:text-xl 2xl:text-2xl">{title}</h2>
        <p class="text-sm lg:text-base xl:text-lg 2xl:text-xl font-semibold">{price}৳</p>
        <p class="text-xs lg:text-sm xl:text-base 2xl:text-lg">{description}</p>
      </div>



    </>



  );
};

export default PageItem;
