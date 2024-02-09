import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const PullSurvey = () => {
  return (
    <Container>
      <h1 style={{marginLeft: '300px', fontSize: '80px'}}>Avengers Pull Survey</h1>
      <Row className="mt-5">
        <Col>
          <h3>Question 1: Which character do you prefer?</h3>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src="./images/cap_america.jpg" style={{width: '635px', height: '500px'}}/>
            <Card.Body>
              <Button variant="primary"><FontAwesomeIcon icon={faThumbsUp} /> Like</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src="./images/iron_man.jpg" style={{width: '635px', height: '500px'}}/>
            <Card.Body>
              <Button variant="primary"><FontAwesomeIcon icon={faThumbsUp} /> Like</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h3>Question 2: Which title do you prefer?</h3>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src="./images/endgame.jpg" style={{width: '635px', height: '500px'}}/>
            <Card.Body>
              <Button variant="primary"><FontAwesomeIcon icon={faThumbsUp} /> Like</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src="./images/infinity.jpg" style={{width: '635px', height: '500px'}}/>
            <Card.Body>
              <Button variant="primary"><FontAwesomeIcon icon={faThumbsUp} /> Like</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h3>Question 3: Which cinema do you prefer?</h3>
        </Col>
      </Row>
      <Row className="mt-3 mb-5">
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src="./images/imax.jpg" style={{width: '635px', height: '500px'}}/>
            <Card.Body>
              <Button variant="primary"><FontAwesomeIcon icon={faThumbsUp} /> Like</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src="./images/robinson.jpg" style={{width: '635px', height: '500px'}}/>
            <Card.Body>
              <Button variant="primary"><FontAwesomeIcon icon={faThumbsUp} /> Like</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Button variant="primary">Submit</Button>
      </Row>
    </Container>
  );
};

export default PullSurvey;
