import React from 'react'

const ThunderSvg = ({ color }: { color?:string}) => {
  return (
      <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          height="15"
          width="15"
          xmlns="http://www.w3.org/2000/svg"
          className={`text-blue-500 h-[.8rem] w-[.8rem]`}
      >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11"></path>
      </svg>
  );
}

export default ThunderSvg