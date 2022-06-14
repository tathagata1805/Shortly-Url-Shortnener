/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {
  Container,
  Header,
  CardsContainer,
  Card,
  IconContainer,
  StatisticsCardIcon
} from '../../styles/components/statistics'

import brandIcon from '../../assets/icon-brand-recognition.svg'
import detailedIcon from '../../assets/icon-detailed-records.svg'
import customizableIcon from '../../assets/icon-fully-customizable.svg'

const Statistics = () => {
  const cardsInfo = [
    {
      title: 'Brand Recognition',
      description: `Boost your brand recognition with each click. Generic links don't
  mean a thing. Branded links help instil confidence in your content.`,
      image: brandIcon
    },
    {
      title: 'Detailed Records',
      description:
        'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
      image: detailedIcon
    },
    {
      title: 'Fully Customizable',
      description:
        'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
      image: customizableIcon
    }
  ]

  return (
    <Container>
      <Header>
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </Header>
      <CardsContainer>
        {cardsInfo.map((card, idx) => (
          <Card key={idx}>
            <IconContainer>
              <StatisticsCardIcon image={card.image} alt="" />
            </IconContainer>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </Card>
        ))}
        <hr />
      </CardsContainer>
    </Container>
  )
}

export default Statistics
