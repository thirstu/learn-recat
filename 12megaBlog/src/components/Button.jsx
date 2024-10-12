import React from 'react'

function Button({
    children,
    type='button',
    bgColor='bg-blue-600',
    textColor='text-white',
    className,
    ...props

}) {
  console.log("Button-comp");

  return (
    <button className={`px-4 py-2 rounded-lg header-nav-btns ${bgColor}${textColor}${className}`} {...props}>{children}</button>
  )
}

export default Button