import React from 'react'

const TimelineItem = ({ title, description, years }) => {
  const yearsLength = new Date().getFullYear() - years

  return (
    <div className='relative pl-6 pb-11 border-l'>
      <div className='absolute -left-1.5 w-3 h-3 rounded-full bg-stone-300 mt-1.5'></div>
      <span className='rounded-md px-2 py-1 text-white bg-black mr-2'>
        {years}
      </span>
      <span className='font-bold mr-2'>{title}</span>
      <span className='text-stone-400 text-sm'>{`${yearsLength} Years`}</span>
      <p className='text-stone-600 mt-3'>{description}</p>
    </div>
  )
}

export default TimelineItem
