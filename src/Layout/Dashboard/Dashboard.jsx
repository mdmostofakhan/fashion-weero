import React from "react";
import { Icon } from "@iconify/react";
import { NavLink, Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container mt-8 flex w-full  gap-12">
      <div className="bg-[#0C4E67] ">
        <div className="flex justify-center items-center my-10">
          <Link to="/" className="">
            <p className="logoFont text-[#03384D] text-5xl font-bold">
              <span className="text-[#3B95B0] logoFont">Urban</span>Utopia
            </p>
          </Link>
        </div>
        <ul className="">
          <li className="border-lime-800 border bg-teal-800 mb-8 text-white p-4">
            <NavLink
              className="flex gap-2 text-xl font-semibold items-center"
              to="/dashboard"
            >
              <Icon icon="material-symbols:dashboard" /> Dashboard
            </NavLink>
          </li>
          <li className="border border-lime-800 mt-2 text-white mb-8 p-4 ">
            <NavLink  className="flex gap-2 text-xl font-semibold items-center" to="/dashboard/orders">
            <Icon icon="iconoir:cart" />Orders</NavLink>
          </li>
          <li className="border border-lime-800 mt-2 text-white mb-8 p-4 ">
            <NavLink  className="flex gap-2 text-xl font-semibold items-center" to="/dashboard/products">
            <Icon icon="streamline:shopping-bag-hand-bag-1-shopping-bag-purse-goods-item-products" /> 
            Products</NavLink>
          </li>
          <li className="border border-lime-800 mt-2 text-white mb-8 p-4">
            <NavLink  className="flex gap-2 text-xl font-semibold items-center" to="/dashboard/addproducts">
            <Icon icon="streamline:shopping-bag-hand-bag-2-shopping-bag-purse-goods-item-products" />  Add Products</NavLink>
          </li>
          <li className="border border-lime-800 mt-2 text-white mb-8 p-4">
            <NavLink  className="flex gap-2 text-xl font-semibold items-center" to="/dashboard/delivery">
            <Icon icon="iconoir:delivery-truck" />
             Delivery & Return</NavLink>
          </li>
          <li className="border border-lime-800 mt-2 text-white mb-8 p-4">
            <NavLink className="flex gap-2 text-xl font-semibold items-center" to="/dashboard/contact">
            <Icon icon="ri:contacts-fill" /> Contact Details</NavLink>
          </li>
          <li className="border border-lime-800 mt-2 text-white mb-8 p-4">
            <NavLink  className="flex gap-2 text-xl font-semibold items-center" to="/dashboard/faq">
            <Icon icon="bi:chat-right-dots-fill" />  FAQ</NavLink>
          </li>
          <li className="border border-lime-800 mt-2 text-white mb-8 p-4">
            <NavLink  className="flex gap-2 text-xl font-semibold items-center" to="/dashboard/logout">
            <Icon icon="mi:log-in" /> Log Out</NavLink>
          </li>
        </ul>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
