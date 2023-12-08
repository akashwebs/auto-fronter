import React from 'react';
const CustomInput = ({ field, register, errors }) => {
    console.log(field)


    return (
        <div> <label
            for="Username"
            class="relative block rounded-md w-full border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >

            <input
                type={field.type}
                placeholder={field.placeholder}
                {...register(field.name, { required: { value: field.required, message: field.errorMessage } })}
                defaultValue={field.defaultValue}
                className={`peer border-none w-full  bg-transparent placeholder-transparent py-2 px-2 focus:border-transparent focus:outline-none focus:ring-0 ${field.className}`}

            />
            <span
                class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
            >
                {field.label}
            </span>
        </label>
            {errors && <small className='text-red-500'>{errors[field.name]?.message}</small>}</div>

    );
};

export default CustomInput;