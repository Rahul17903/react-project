import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'
export default function RTE({name,control,label,defaultValue=""}){
    return (
        <div>
            {label && <label className='inline-block mb-1'>{label}</label> }
            <Controller name={name || "content"} control={control} render={(
                {
                    field:{onchange}
                }
            )=>(
                <Editor initialValue='default Value'
                 apiKey='eycgkfeperb4jjkg3rg1qni8f7oxw2ntlu2mr3c4m9zpu2v0' 
                 init={{
                    initialValue:defaultValue,
                    height:500,
                    meubar:true,
                    plugins:['anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount','checklist', 'mediaembed', 'casechange', 'export', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown','importword', 'exportword', 'exportpdf'],
                    toolbar:'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons',
                    content_style : "body{font-family: font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                }} onEditorChange={onchange}
                 />
                    
                
            )}  />

           
        </div>
    )
}
