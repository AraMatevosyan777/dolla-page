import React, { useState } from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent,HeroH1, HeroP, HeroBtn, ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '../common/ButtonElements'
import Video from '../../accets/videos/video.mp4'

const HeroSection = () => {
    const [hover, setHover] = useState(false)
  return (
    <HeroContainer id='home'>
      <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
      </HeroBg>
      <HeroContent>
          <HeroH1>Virtual Banking Made Ease</HeroH1>
          <HeroP>
              Sign up for a new account today and receive $250 in 
              credit towards your 
              next payment.
          </HeroP>
          <HeroBtn>
              <Button 
              to='signup'
              onMouseEnter={()=> setHover(true)} 
              onMouseLeave={()=> setHover(false)}
              primary='true'
              dark='true'
              smooth={true} duration={500} spy={true} exact='true'
              >
                  Get started {hover ? <ArrowForward/> : <ArrowRight/>}
              </Button>
          </HeroBtn>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
