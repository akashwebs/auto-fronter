"use client"

import React, { useState } from 'react';
import CustomDeleteButton from './customDeleteButton';

const CustomTable = ({ title = "Title", data = [], tableDesign = [{ colName: "Title", colKay: "blogTitle" }] }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 1; // Set the number of items per page

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className="container p-2 mx-auto sm:p-4 ">
                <h2 className="mb-4 text-2xl font-semibold leading-relaxed">{title}</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <thead className="">
                            <tr className="text-left">
                                {tableDesign.map(col => (
                                    <th className="p-3" key={col.colKay}>
                                        {col.colName}
                                    </th>
                                ))}
                                <th className="p-3 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((d, index) => (
                                <tr key={index} className="border-b border-opacity-20">
                                    {tableDesign.map((col, colIndex) => (
                                        <td key={colIndex} className="p-3">
                                            <p>{d[col.colKay]}</p>
                                        </td>
                                    ))}
                                    <td className="p-3 text-right">
                                        <CustomDeleteButton />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-end mt-4">
                    <ul className="pagination">
                        {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map((_, index) => (
                            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                <button className="page-link" onClick={() => paginate(index + 1)}>
                                    {index + 1}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CustomTable;
/* 

const tableDesign = [
        {
            colName: "Title",
            colKay: "blogTitle"
        },
        {
            colName: "Date",
            colKay: "date"
        },
        {
            colName: "Image Name",
            colKay: "image"
        },
    ];

*/


/* 

data = [
        {
            blogTitle: "amar sonar bangla",
            date: "01/12/1997",
            image: "example.com/image.png",
            description: "amar sonar bnalg ami tomay valobasi chirodin tomar akash tomar batas "
        },
        {
            blogTitle: "amar sonar bangla 2",
            date: "01/12/1997",
            image: "example.com/image.png",
            description: "amar sonar bnalg ami tomay valobasi chirodin tomar akash tomar batas "
        },
    ];
    

*/