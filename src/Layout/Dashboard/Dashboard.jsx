import React from "react";
import { FaBeer } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container mt-8 flex mx-auto  gap-8">
      <div className="bg-[#0C4E67] ">
      <div className='flex justify-center items-center my-10'>
                    <Link to="/" className="">
                        <p className='logoFont text-[#03384D] text-5xl font-bold'><span className='text-[#3B95B0] logoFont'>Urban</span>Utopia</p>
                    </Link>
                </div>
        <ul className="">
          <li className="border-lime-800 border bg-teal-800 mb-8 text-white p-4">
            <Link to="/dashboard">
              <FaBeer></FaBeer> Dashboard
            </Link> 
          </li>
          <li className="border border-lime-800 mt-2 text-white mb-8 p-4 ">
            <Link to="/dashboard/orders">Orders</Link>
          </li>
          <li className="border border-lime-800 mt-2 text-white mb-8 p-4 ">
            <Link to="/dashboard/products">Products</Link>
          </li>
          <li className="border border-lime-800 mt-2 text-white mb-8 p-4">
            <Link to="/dashboard/addproducts">Add Products</Link>
          </li>
          <li className="border border-lime-800 mt-2 text-white mb-8 p-4">
            <Link to="/dashboard/delivery">Delivery & Return</Link>
          </li>
          <li className="border border-lime-800 mt-2 text-white mb-8 p-4">
            <Link to="/dashboard/contact">Contact Details</Link>
          </li>
          <li className="border border-lime-800 mt-2 text-white mb-8 p-4">
            <Link to="/dashboard/faq">FAQ</Link>
          </li>
          <li className="border border-lime-800 mt-2 text-white mb-8 p-4">
            <Link to="/dashboard/logout">Log Out</Link>
          </li>
        </ul>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
