import React from 'react';
import DownloadMobile from '../../components/DownloadMobile/DownloadMobile';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useForm } from "react-hook-form";
import { Fade } from 'react-awesome-reveal';


const AddNewAddress = () => {

    const order = {
        userId: '12345',
        productId: '23',

    }


    // from handle 
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        
    };


    return (
        <div>
            <Fade>
                <Helmet><title>UrbanUtopia | Add New Address</title></Helmet>
                <div className='bg-[#C8C2BF] py-20'>
                    <div className="lg:w-7/12 md:w-10/12 w-[90%] mx-auto">
                        <div className=" flex-col lg:flex-row-reverse">
                            <div className="xl:max-w-full lg:max-w-3xl md:max-w-2xl max-w-sm flex-shrink-0 rounded-md shadow-md bg-white mx-1 md:mx-0 lg:mx-0 xl:mx-0 ">
                                <form onSubmit={handleSubmit(onSubmit)} className="card-body lg:px-12 md:px-20 px-[16px] space-y-5 py-16">
                                    <div>
                                        <p className='text-2xl font-semibold'>Add New Address</p>
                                    </div>
                                    <div className="form-control">
                                        <label className="label px-0">
                                            <span className="label-text text-xl font-medium">Full Name*</span>
                                        </label>
                                        <input type="text" {...register("name")} required placeholder="Your Full Name*" className="input placeholder-black input-bordered h-16 rounded-none border-black text-black text-xl" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label px-0">
                                            <span className="label-text text-xl font-medium">Mobile Number*</span>
                                        </label>
                                        <input type="text" {...register("mobile")} required placeholder="eg: 01********125" className="input placeholder-black input-bordered h-16 rounded-none border-black text-black text-xl" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label px-0">
                                            <span className="label-text text-xl font-medium">Address*</span>
                                        </label>
                                        <input type="text" {...register("address")} required placeholder="Your Address" className="input placeholder-black input-bordered h-16 rounded-none border-black text-black text-xl" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label px-0">
                                            <span className="label-text text-xl font-medium">Area*</span>
                                        </label>
                                        <input type="text" {...register("area")} required placeholder="Your Area" className="input placeholder-black input-bordered h-16 rounded-none border-black text-black text-xl" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label px-0">
                                            <span className="label-text text-xl font-medium">City*</span>
                                        </label>
                                        <input type="text" {...register("city")} required placeholder="Your City" className="input placeholder-black input-bordered h-16 rounded-none border-black text-black text-xl" />
                                    </div>
                                    {/* <div className="form-control relative">
                                        <label className="label px-0">
                                            <span className="label-text text-xl font-medium">Province*</span>
                                        </label>
                                        <input type="text" required placeholder="Province" className="placeholder-black input h-16 rounded-none input-bordered border-black text-black text-xl placeholder-dots" />
                                        <div className='absolute right-5 top-16'><Icon icon="mdi:eye-off" className='text-3xl' /></div>
                                    </div>
                                    <div className="form-control">
                                        <label className="label px-0">
                                            <span className="label-text text-xl font-medium">Land Mark*</span>
                                        </label>
                                        <input type="text" required placeholder="Lank Mark" className="input placeholder-black input-bordered h-16 rounded-none border-black text-black text-xl" />
                                    </div> */}

                                    <div className="form-control mt-10 lg:ml-auto">
                                        <input type="submit" value='Save' className='btn px-16 bg-[#0C4E67] text-white mt-4 normal-case text-[16px] h-16 rounded-none hover:bg-[#3B95B0]' />
                                    </div>
                                    <div>
                                        <Link to='/adedAddress'>Next</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <DownloadMobile></DownloadMobile>
            </Fade>
        </div>
    );
};

export default AddNewAddress;