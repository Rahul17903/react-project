import React from 'react'
import { useId } from 'react'

const Input = React.forwardRef(function Input({label,type="text",className="",...props},ref){
    const id = useId()
    return (
        <div className='w-full'>
            {label && <lebel className="inline-block mb-1 pl-1" htmlFor={id} >{label}</lebel>}
            <input type={type} className={`${className} px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200`} ref={ref} {...props} id={id} />
        </div>
    )
})
export default Input