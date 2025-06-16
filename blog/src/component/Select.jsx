import React from 'react'
import { useId } from 'react'

const Select = ({options,label,className, ...props},ref) => {
    const id = useId()

  return (
    <div className='w-full'>
      {label && <label htmlFor={id} className='' >{label}</label> }
      <select  id={id} {...props} ref={ref} className={`${className}`}>
        {options ?.map((option)=>(
            <option key={option} value={option} >{option}</option>
        ))}
      </select>
    </div>
  )
}

export default React.forwardRef(Select)
