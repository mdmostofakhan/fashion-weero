import React from 'react';
import { Icon } from '@iconify/react';
import image1 from '../../../assets/KidsNewItems/img2.png'
import icon1 from '../../../assets/Fav icon/Rectangle 284.png'

const ProductTable = () => {
    return (
        <div>
            <table className='border w-full'>
                 <thead className='border'>
                     <th className='border border-green-600 text-center py-3'>Image</th>
                     <th className='border border-green-600 text-center py-3'>Product Name</th>
                     <th className='border border-green-600 text-center py-3'>Category </th>
                     <th className='border border-green-600 text-center py-3'>Stock </th>
                     <th className='border border-green-600 text-center py-3'>Regular price</th>
                     <th className='border border-green-600 text-center py-3'>Offer Price</th>
                     <th className='border border-green-600 text-center py-3'>Discount </th>
                     <th className='border border-green-600 text-center py-3'>Edit Product </th>
                     <th className='border border-green-600 text-center py-3'>Delete </th>
                 </thead>

                 <tbody className='text-center w-fll'>
                   <tr>
                    <td className='border border-green-600 w-[140px] p-3'>
                        <img className='w-full' src={icon1} alt="" />
                    </td>
                    <td className='border border-green-600'>BMW Car</td>
                    <td className='border border-green-600'>car</td>
                    <td className='border border-green-600'>20,000 </td>
                    <td className='border border-green-600'>700,000,00৳</td>
                    <td className='border border-green-600'>650,000,00৳</td>
                    <td className='border border-green-600'>07%</td>
                    <td className='border text-5xl text-center border-green-600'>
                    <Icon className=' inline-block bg-black text-white' icon="tabler:edit" />
                        </td>
                    <td className='border text-6xl border-green-600'>
                        <Icon className='inline-block' icon="material-symbols:delete" /></td>
                   </tr>
                   
                   <tr>
                    <td className='border border-green-600 w-[140px] p-3'>
                        <img className='w-full' src={icon1} alt="" />
                    </td>
                    <td className='border border-green-600'>BMW Car</td>
                    <td className='border border-green-600'>car</td>
                    <td className='border border-green-600'>20,000 </td>
                    <td className='border border-green-600'>700,000,00৳</td>
                    <td className='border border-green-600'>650,000,00৳</td>
                    <td className='border border-green-600'>07%</td>
                    <td className='border text-5xl border-green-600'>
                      <Icon className='inline-block bg-black text-white' icon="tabler:edit" />
                        </td>
                    <td className='border text-6xl border-green-600'>
                        <Icon className='inline-block' icon="material-symbols:delete" /></td>
                   </tr>

                   <tr className=''>
                    <td className='border border-green-600 w-[140px] p-3'>
                        <img className='w-full' src={icon1} alt="" />
                    </td>
                    <td className='border border-green-600'>BMW Car</td>
                    <td className='border border-green-600'>car</td>
                    <td className='border border-green-600'>20,000 </td>
                    <td className='border border-green-600'>700,000,00৳</td>
                    <td className='border border-green-600'>650,000,00৳</td>
                    <td className='border border-green-600'>07%</td>
                    <td className='border text-5xl border-green-600'>
                      <Icon className='inline-block bg-black text-white' icon="tabler:edit" /></td>
                    <td className='border text-6xl border-green-600'>
                        <Icon className='inline-block' icon="material-symbols:delete" /></td>
                   </tr>
                 </tbody>
            </table>
        </div>
    );
};

export default ProductTable;