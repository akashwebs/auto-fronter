import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const CustomInputDate = ({ startDate, setStartDate, field }) => {
    return (
        <div className="relative block">
            <DatePicker
                {...field}
                isClearable={true}
                placeholderText={field.placeholder}
                className="peer border border-gray-300 text-gray-600 rounded-md w-full  bg-transparent  py-2 px-2 focus:border-gray outline-gray-400 duration-150 focus:ring-0 "
                selected={startDate} onChange={(date) => setStartDate(date)} />
            <span
                class="pointer-events-none block capitalize absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
            >
                {field.label}
            </span>
            <div>
                {field.required && !startDate && <small className='text-red-500'>{field?.errorMessage}</small>}

            </div>
        </div>

    );
}
export default CustomInputDate;