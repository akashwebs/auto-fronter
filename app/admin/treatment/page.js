import AdminLayout from '@/src/Layout/AdminLayout';
import CustomAddButton from '@/src/shared/AutoRequiredComp/CustomButton';
import CustomTable from '@/src/shared/AutoRequiredComp/CustomTable';
import React from 'react';

const treatment = () => {
    const data = [
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


    return (
        <AdminLayout>

            <div>

                <div>
                    <CustomAddButton {...{ title: 'Add Post' }} />
                </div>

                {/* table */}

                <div className='bg-white p-2 my-3'>
                    <CustomTable data={data} tableDesign={tableDesign} title={"Fish Treatment"} />
                </div>
            </div>
        </AdminLayout>
    );
};

export default treatment;