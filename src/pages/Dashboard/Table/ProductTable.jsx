import React from 'react';

const ProductTable = () => {
    return (
        <div>
            <table className='border w-full'>
                 <thead className='border'>
                     <th>Image</th>
                     <th>Product Name</th>
                     <th>Category </th>
                     <th>Category </th>
                     <th>Stock </th>
                     <th>Regular price</th>
                     <th>Offer Price</th>
                     <th>Discount </th>
                     <th>Edit Product </th>
                     <th>Delete </th>
                 </thead>

                 <tbody>
                   <tr>
                    <td><img src="" alt="" /></td>
                    <td>Product Name</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                   </tr>
                 </tbody>
            </table>
        </div>
    );
};

export default ProductTable;