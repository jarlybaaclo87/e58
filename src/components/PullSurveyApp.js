import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



const PullSurveyApp = () => {

  const { locationResults = {} } = useLocation();
    
const {
  capVotesResults,
  ironVotesResults,
  endVotesResults,
  infiVotesResults,
  imaxVotesResults,
  robVotesResults,
  pullSurveySessionResults
} = locationResults;


  const [capVotes, setCapVotes] = useState(capVotesResults);
  const [ironVotes, setIronVotes] = useState(ironVotesResults);
  const [endVotes, setEndVotes] = useState(endVotesResults);
  const [infiVotes, setInfiVotes] = useState(infiVotesResults);
  const [imaxVotes, setImaxVotes] = useState(imaxVotesResults);
  const [robVotes, setRobVotes] = useState(robVotesResults);
  const [pullSurveySession, setPullSurveySession] = useState(pullSurveySessionResults+1);

  const handleCapClickVote = () => {
    setCapVotes(capVotes + 1);
  };

  const handleIronClickVote = () => {
    setIronVotes(ironVotes + 1);
  };

  const handleEndClickVote = () => {
    setEndVotes(endVotes + 1);
  };

  const handleInfiClickVote = () => {
    setInfiVotes(infiVotes + 1);
  };

  const handleImaxClickVote = () => {
    setImaxVotes(imaxVotes + 1);
  };

  const handleRobClickVote = () => {
    setRobVotes(robVotes + 1);
  };
 

  const navigate = useNavigate();

  const handleSubmit = () => {
    setPullSurveySession(pullSurveySession + 1);
    // Redirect to results page with voting data
    navigate('/PullSurveyResults', {
      state: {
        capVotes,
        ironVotes,
        endVotes,
        infiVotes,
        imaxVotes,
        robVotes,
        pullSurveySession
      }
    });
  };
  console.log(locationResults);
  //Captain america and ironman
  const [isCapClicked, setIsCapClicked] = useState(false);
  const [isIronClicked, setIsIronClicked] = useState(false);
 //
  const [isEndClicked, setIsEndClicked] = useState(false);
  const [isInfiClicked, setIsInfiClicked] = useState(false);

  const [isImaxClicked, setIsImaxClicked] = useState(false);
  const [isRobClicked, setIsRobClicked] = useState(false);

  const handleCapClick = () => {
    setIsCapClicked(true);
    setIsIronClicked(false);
    handleCapClickVote();
  };

  const handleIronClick = () => {
    setIsIronClicked(true);
    setIsCapClicked(false);
    handleIronClickVote();
  };

  const handleEndClick = () => {
    setIsEndClicked(true);
    setIsInfiClicked(false);
    handleEndClickVote();
  };

  const handleInfiClick = () => {
    setIsInfiClicked(true);
    setIsEndClicked(false);
    handleInfiClickVote();
    
  };

  const handleImaxClick = () => {
    setIsImaxClicked(true);
    setIsRobClicked(false);
    handleImaxClickVote();
  };

  const handleRobClick = () => {
    setIsRobClicked(true);
    setIsImaxClicked(false);
    handleRobClickVote();
  };

  return (
    <Container>
      <h1 style={{ marginLeft: '300px', fontSize: '80px' }}>Avengers Pull Survey</h1>
      <Row className="mt-5">
        <Col>
          <h3>Question 1: Which character do you prefer?</h3>
        </Col>
      </Row>
      <Row className="mt-3">
      <Col md={6}>
        <Card id="cap">
          <Card.Img variant="top" src="./images/cap_america.jpg" style={{ width: '635px', height: '500px' }} />
          <Card.Body>
            <Button
              className="capButton"
              variant={isCapClicked ? "danger" : "primary"}
              onClick={handleCapClick}
            >
              <FontAwesomeIcon icon={faThumbsUp} /> Like
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <Card id="iron">
          <Card.Img variant="top" src="./images/iron_man.jpg" style={{ width: '635px', height: '500px' }} />
          <Card.Body>
            <Button
              className="ironButton"
              variant={isIronClicked ? "danger" : "primary"}
              onClick={handleIronClick}
            >
              <FontAwesomeIcon icon={faThumbsUp} /> Like
            </Button>
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
          <Card id='end'>
            <Card.Img variant="top" src="./images/endgame.jpg" style={{width: '635px', height: '500px'}}/>
            <Card.Body>
              <Button className='endButton'  variant={isEndClicked ? "danger" : "primary"}
              onClick={handleEndClick}
              ><FontAwesomeIcon icon={faThumbsUp} /> Like</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card id='infi'>
            <Card.Img variant="top" src="./images/infinity.jpg" style={{width: '635px', height: '500px'}}/>
            <Card.Body>
              <Button className='infiButton'  variant={isInfiClicked ? "danger" : "primary"}
              onClick={handleInfiClick}
              ><FontAwesomeIcon icon={faThumbsUp} /> Like</Button>
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
          <Card id='imax'>
            <Card.Img variant="top" src="./images/imax.jpg" style={{width: '635px', height: '500px'}}/>
            <Card.Body>
              <Button className='imaxButton'  variant={isImaxClicked ? "danger" : "primary"}
              onClick={handleImaxClick}>
                <FontAwesomeIcon icon={faThumbsUp} /> Like</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card id='rob'>
            <Card.Img variant="top" src="./images/robinson.jpg" style={{width: '635px', height: '500px'}}/>
            <Card.Body>
              <Button className='robButton'  variant={isRobClicked ? "danger" : "primary"}
              onClick={handleRobClick}><FontAwesomeIcon icon={faThumbsUp} /> Like</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
      <Button className='pullSurveyAppButton' variant="primary" onClick={handleSubmit}>Submit</Button>
      </Row>
    </Container>
  );

}

export default PullSurveyApp;
