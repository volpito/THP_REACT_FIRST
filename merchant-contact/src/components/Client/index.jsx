import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardColumns from 'react-bootstrap/CardColumns';

const Client = ({ data }) => {
  const { firstName, lastName, phoneNumber, imageUrl, jobTitle } = data;

  return (
    <CardColumns>
    <Container>
      <Row>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} alt="photo de profile" />
      <Card.Body>
        <Card.Title>{firstName} {lastName}</Card.Title>
        <Card.Text>
        What i do for a living : {jobTitle} <br /> Phone : {phoneNumber}
        </Card.Text>
        <Button variant="primary" href={`mailto:${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`}>Send email</Button>
      </Card.Body>
    </Card>
    </Row>
    </Container>
    </CardColumns>
  );
};

export default Client;