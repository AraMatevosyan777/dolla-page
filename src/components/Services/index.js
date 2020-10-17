import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'
import icon1 from '../../accets/images/svg1.svg'
import icon2 from '../../accets/images/svg2.svg'
import icon3 from '../../accets/images/svg3.svg'

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
          <ServicesCard>
              <ServicesIcon src={icon1}/>
              <ServicesH2>Reduce expenses</ServicesH2>
              <ServicesP>We help reduce your fess and increase your overall revenue.</ServicesP>
          </ServicesCard>
          <ServicesCard>
              <ServicesIcon src={icon2}/>
              <ServicesH2>Virtual Offices</ServicesH2>
              <ServicesP>You can access our platform online anywhere in the world.</ServicesP>
          </ServicesCard>
          <ServicesCard>
              <ServicesIcon src={icon3}/>
              <ServicesH2>Premium Benefits</ServicesH2>
              <ServicesP>Unlock our special membership card returns 5% cash back.</ServicesP>
          </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
