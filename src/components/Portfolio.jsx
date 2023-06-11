import React from 'react'
import { useState } from 'react'
import portfolioData from '../data/portfolioData'
import PortfolioItem from './PortfolioItem'

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState([...portfolioData])
  return (
    <div className='flex flex-row justify-center'>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 max-w-full gap-4'>
        {portfolios &&
          portfolios.map((portfolio) => <PortfolioItem {...portfolio} />)}
      </div>
    </div>
  )
}

export default Portfolio
