import React from 'react';

const CustomAddButton = ({ title = 'Add', addFunction }) => {
    return (
        <button onClick={addFunction} class="inline-flex items-center px-4 py-2 bg-primary hover:bg-primary/70 duration-150 text-white text-sm font-medium rounded-md">
            <span className='mr-1'>+</span>

            {title}
        </button>
    );
};

export default CustomAddButton;

