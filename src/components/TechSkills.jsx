import React from 'react'
import { technologies } from '../Constants/Index'
import BallCanvas from './BallCanvas'
import { Tooltip } from '@chakra-ui/react'

const TechSkills = () => {
  return (
    <div id='skills' className='flex flex-row flex-wrap justify-center gap-10 skills_section py-24'>
        { technologies.map((technology) => (
            <Tooltip label={technology.name}>
              <div className='w-28 h-28' key={technology.name}>
                  <BallCanvas icon={technology.icon} />
              </div>
            </Tooltip>
        ))} 
    </div>
  )
}

export default TechSkills
