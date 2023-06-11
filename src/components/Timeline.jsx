import React from 'react'
import TimelineItem from './TimelineItem'
import timelineItems from '../data/timelineItems'

const Timeline = () => {
  return (
    <div className='w-full md:w-7/12 mx-auto my-20'>
      <h1 className='font-bold underline text-xl mb-6'>Timeline</h1>
      {timelineItems && timelineItems.map((item) => <TimelineItem {...item} />)}
    </div>
  )
}

export default Timeline
