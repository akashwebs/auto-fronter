import Image from 'next/image';
import React, { useState } from 'react';

const SingleImageUpload = ({ field, imageUrl, setImageUrl }) => {



    const imgUrl = `https://api.imgbb.com/1/upload?key=ab3e927fbb2142be370cd6e16ff2fdee`;
    const handleImageUpload = (e) => {
        const image = e.target.files[0];
        const formData = new FormData();
        formData.append("image", image);
        fetch(imgUrl, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((result) => {
                setImageUrl(result.data?.url);
            });
    };


    return (
        <div>
            {(setImageUrl) ? <div>  <fieldset
                class="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >

                <div className="flex ">
                    <input
                        onChange={handleImageUpload}
                        type="file" className="px-8   w-full py-12 border-2 border-dashed rounded-md " />
                </div>
                <span
                    class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-sm text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                >
                    {field?.label ? field.label : "Image Upload"}
                </span>
            </fieldset>
                {
                    imageUrl && (
                        <div className="flex gap-2 ">
                            <div className="  w-[40px] max-w-[100px] p-1 bg-white shadow-md rounded-md mt-3 ">
                                <Image
                                    src={imageUrl}
                                    width="40"
                                    height="40"
                                    alt="category image"
                                    className="w-full h-full object-contain "
                                />
                            </div>
                        </div>
                    )
                }</div> : <p className='w-full h-[80px] p-4 border text-xs text-red-300 '>Image filed. <br />please declare   const [imageUrl, setImageUrl] = useState();
                    and pass props </p>}
        </div>
    );
};

export default SingleImageUpload;