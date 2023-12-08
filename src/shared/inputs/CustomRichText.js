import React from 'react';
import ReactQuill from 'react-quill';

const CustomRichText = ({ richText, setValueOfRichText, field }) => {

    if (!setValueOfRichText) {
        return <p className='w-full h-[80px] p-4 border text-xs text-red-300 '>rich text field <br />please declare const[richText, setValueOfRichText] = useState();
            and pass props </p>
    }


    return (
        <div className=" mb-10">
            <label htmlFor="" className="text-[13px] text-[#555555] font-bold"> {field.label}</label>
            <ReactQuill
                //   theme="snow"
                value={richText}
                onChange={setValueOfRichText}
                style={{ height: 200, marginBottom: 12 }}
                {...field}
            />
        </div>
    );
};

export default CustomRichText;