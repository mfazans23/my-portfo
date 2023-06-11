import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-row items-center justify-center gap-2'>
      <a
        href='#'
        target='_blank'
        className='relative rounded-full p-5 bg-stone-400 cursor-pointer'
      >
        <i class='absolute -translate-x-1/2 -translate-y-1/2  text-white text-xl fa-brands fa-linkedin'></i>
      </a>
      <a
        href='#'
        target='_blank'
        className='relative rounded-full p-5 bg-stone-400 cursor-pointer'
      >
        <i class='absolute -translate-x-1/2 -translate-y-1/2  text-white text-xl fa-brands fa-github'></i>
      </a>
      <a
        href='#'
        target='_blank'
        className='relative rounded-full p-5 bg-stone-400 cursor-pointer'
      >
        <i class='absolute -translate-x-1/2 -translate-y-1/2  text-white text-xl fa-brands fa-whatsapp'></i>
      </a>
      <a
        href='#'
        target='_blank'
        className='relative rounded-full p-5 bg-stone-400 cursor-pointer'
      >
        <i class='absolute -translate-x-1/2 -translate-y-1/2  text-white text-xl fa-brands fa-github'></i>
      </a>
    </div>
  )
}

export default Footer
