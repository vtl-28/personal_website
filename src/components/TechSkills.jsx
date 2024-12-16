import React from 'react'
import { technologies } from '../Constants/Index'
import BallCanvas from './BallCanvas'

const TechSkills = () => {
  return (
    <div id='skills' className='flex flex-row flex-wrap justify-center gap-10 py-24 skills_section'>
        { technologies.map((technology) => (
              <div className='w-28 h-28' key={technology.name}>
                  <BallCanvas icon={technology.icon} />
                  <p className='text-center text-white font-link'>{technology.name}</p>
              </div>            
        ))}
    </div>
  )
}

export default TechSkills
