import React from 'react';
import {Editor} from '@tinymce/tinymce-react';
import {Controller} from 'react-hook-form';
import conf from '../conf/conf.js';


function RTE({name,control,label,defaultValue=''}) {
  console.log("RTE-comp");

return (

    <div
    className='w-full'
    >
    {  label&&<label className='inline-block mb-1 pl-1'>{label}</label>}

<Controller
name={name||"content"}
control={control}
render={({field:{onChange}}) =>(
        <Editor
        apiKey={conf.tiny_mce_api_key}
    initialValue='default value'
    init={
        {
            branding:false,
            initialValue:defaultValue,
            height:500,
            menubar:true,
            plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
            readonly: false,
        }
    }
    onEditorChange={onChange}
    />
)}
/>
    </div>
)
}

export default RTE