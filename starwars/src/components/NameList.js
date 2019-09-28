import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { Card, CardText, CardBody, CardTitle, CardImg, Col } from "reactstrap";


export default function NameList(props){
  return(
    <Col xs ="6" lg="4" height="100%">
      <Card className = "name-list" key={props.id}>
        <CardBody height="100%">
          <CardTitle>{props.name}</CardTitle>
          <CardText>{props.gender}</CardText>
          <CardText>Height: {props.height}</CardText>
          <CardText>Hair Color: {props.hair_color}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
}