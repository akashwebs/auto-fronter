import React from 'react';
import Select from 'react-select'
const CustomSelect = ({ options, getValueFunction, defaultValue }) => {
    return (
        <div>
            <Select
                className={`${options.className}`}
                placeholder={options.label}
                defaultValue={defaultValue}
                onChange={getValueFunction}
                options={options.options} />
            {options.required && !defaultValue && <small className='text-red-500'>{options?.errorMessage}</small>}
        </div>
    );
};

export default CustomSelect;