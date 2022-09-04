import React from 'react'

type Props = {
  title: string;
}

const Button= (props:Props) => {
  return (
    <div className="flex items-center justify-center">
    <button className="font-semi my-5 rounded-3xl bg-gray-800 py-[10px] px-[20px] text-base text-white">
      {props.title}
    </button>
  </div>
  )
}

export default Button