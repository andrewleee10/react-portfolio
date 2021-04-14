import React from 'react';
import {
  Card as Crd, CardText, CardBody, CardLink,
  CardTitle, CardGroup, CardImg
} from 'reactstrap';
import img from '../images/logo_3.png'
import img1 from '../images/weekndrLogo.png'
import img2 from '../images/birdbook.png'
import './Card.css'

const Card = (props) => {
  return (
    <CardGroup className="crd_div">
      <Crd>
        <CardImg top width="100%" src={img} alt="board" />
        <CardBody>
          <CardTitle tag="h5">Boardom</CardTitle>
          <CardText>An application where users can find any boardgame and even purchase it. Click the link to use the application.</CardText>
          <CardLink href="https://djlongarms.github.io/Board-Game-Collection">Click Here</CardLink>
        </CardBody>
      </Crd>
      <Crd>
        <CardImg top width="100%" src={img1} alt="weekend" />
        <CardBody>
          <CardTitle tag="h5">Weekendr</CardTitle>
          <CardText>A full stack application that allows users to find postings of outdoor activities. The application is deployed through heroku.</CardText>
          <CardLink href="https://thawing-sands-64181.herokuapp.com/">Check it out here!</CardLink>
        </CardBody>
      </Crd>
      <Crd>
        <CardImg top width="100%" src={img2} alt="birdbook" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardText>A full stack, social media MERN application with user authentication and instant messaging features.</CardText>
          <CardLink href="/">Try it out!</CardLink>
        </CardBody>
      </Crd>
    </CardGroup>
  );
};

export default Card;

