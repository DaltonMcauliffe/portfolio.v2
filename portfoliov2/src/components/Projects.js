import React from 'react'
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Button} from 'reactstrap'
import DogLogo from '/Users/learnacademy/Desktop/portfolio.v2/portfoliov2/src/components/Images/The Woof (1).png'
const Projects = () => {
  const handleClick = () => {
    window.open('https://good-dogs-tinder.onrender.com/', '_blank')
  }

  return (
   <>
   <div className='projects-folder'>
   <Card
  style={{
    width: '18rem',
  }}
>
  <img
    alt="Sample"
    src={DogLogo}
  />
  <CardBody>
    <CardTitle tag="h5">
      Dog Tinder
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Created by Dalton and M
    </CardSubtitle>
    <CardText>
      Welcome to Dog Tinder created by Dalton and M come match a puppy on our live website!
    </CardText>
    <Button onClick={handleClick}>
      Click Me!
    </Button>
  </CardBody>
</Card>
   </div>
   </>
  )
}

export default Projects