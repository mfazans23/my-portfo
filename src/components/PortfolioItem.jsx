import React from 'react'

const PortfolioItem = ({ title, imgUrl, stack, link }) => {
  return (
    <div className='border border-2 border-black rounded-md overflow-hidden w-80 self-start'>
      <div className='h-64 w-full relative'>
        <a href={link} target='_blank'>
          <img
            src={imgUrl}
            alt={title}
            className='absolute w-full h-full object-cover object-center'
          />
        </a>
      </div>
      <div className='bg-white p-4'>
        <h1 className='font-bold mb-2'>{title}</h1>
        <div className='flex flex-row justify-start items-start flex-wrap gap-2 w-full'>
          {stack.map((stackItem) => (
            <span className='px-2 py-1 border border-2 border-black rounded-md'>
              {stackItem}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PortfolioItem
