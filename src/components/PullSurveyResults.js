import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, ProgressBar } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const PullSurveyResults = () => {
  const { state } = useLocation();

  console.log(state);

  const {
    capVotes,
    ironVotes,
    endVotes,
    infiVotes,
    imaxVotes,
    robVotes,
    pullSurveySession
  } = state;

  const capProgress = (capVotes / pullSurveySession) * 100;
  const ironProgress = (ironVotes / pullSurveySession) * 100;
  const endProgress = (endVotes / pullSurveySession) * 100;
  const infiProgress = (infiVotes / pullSurveySession) * 100;
  const imaxProgress = (imaxVotes / pullSurveySession) * 100;
  const robProgress = (robVotes / pullSurveySession) * 100;

  console.log(capProgress, ironProgress, endProgress, infiProgress, imaxProgress, robProgress);

  const [capVotesResults, setCapVotesResults] = useState(capVotes);
  const [ironVotesResults, setIronVotesResults] = useState(ironVotes);
  const [endVotesResults, setEndVotesResults] = useState(endVotes);
  const [infiVotesResults, setInfiVotesResults] = useState(infiVotes);
  const [imaxVotesResults, setImaxVotesResults] = useState(imaxVotes);
  const [robVotesResults, setRobVotesResults] = useState(robVotes);
  const [pullSurveySessionResults, setPullSurveySessionResults] = useState(pullSurveySession);
  
  const navigateResults = useNavigate();

const handleBackToSurvey = ()=>{
  setCapVotesResults(capVotesResults+0);
  setIronVotesResults(ironVotesResults+0);
  setEndVotesResults(ironVotesResults+0);
  setInfiVotesResults(ironVotesResults+0);
  setImaxVotesResults(ironVotesResults+0);
  setRobVotesResults(ironVotesResults+0);
  setPullSurveySessionResults(pullSurveySessionResults+0);

  navigateResults('/', {
      locationResults: {
      capVotesResults,
      ironVotesResults,
      endVotesResults,
      infiVotesResults,
      imaxVotesResults,
      robVotesResults,
      pullSurveySessionResults
    }
  })
};
  return (
      <Container>
        <h1 style={{ marginLeft: '300px', fontSize: '80px' }}>Avengers Pull Survey Results</h1>
        <Row className="mt-5">
          <Col>
            <Card>
              <Card.Img variant="top" src="./images/cap_america.jpg" style={{ width: '100%' }} />
              <Card.Body>
              <ProgressBar now={capProgress} label={`${capVotes}/${pullSurveySession}`} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Card>
              <Card.Img variant="top" src="./images/iron_man.jpg" style={{ width: '100%' }} />
              <Card.Body>
              <ProgressBar now={ironProgress} label={`${ironVotes}/${pullSurveySession}`} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Card>
              <Card.Img variant="top" src="./images/endgame.jpg" style={{ width: '100%' }} />
              <Card.Body>
              <ProgressBar now={endProgress} label={`${endVotes}/${pullSurveySession}`} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Card>
              <Card.Img variant="top" src="./images/infinity.jpg" style={{ width: '100%' }} />
              <Card.Body>
              <ProgressBar now={infiProgress} label={`${infiVotes}/${pullSurveySession}`} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Card>
              <Card.Img variant="top" src="./images/imax.jpg" style={{ width: '100%' }} />
              <Card.Body>
              <ProgressBar now={imaxProgress} label={`${imaxVotes}/${pullSurveySession}`} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Card>
              <Card.Img variant="top" src="./images/robinson.jpg" style={{ width: '100%' }} />
              <Card.Body>
              <ProgressBar now={robProgress} label={`${robVotes}/${pullSurveySession}`} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5-fluid">
        <Link to='/'><Button className='backtoSurveyButton' variant="primary" onClick={handleBackToSurvey}>Back to Survey</Button></Link>
        </Row>
      </Container>

    );
  };
export default PullSurveyResults

  
