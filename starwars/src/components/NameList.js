import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { Card, CardText, CardBody, CardTitle, CardImg, Col } from "reactstrap";


export default function NameList(props){
  return(
    <Col>
      <Card className = "name-list" key={props.id}>
        {/* <CardImg src="./Han.jpg" width="100%" top /> */}
        <CardBody className = "card" >
          <CardTitle>{props.name}</CardTitle>
          <CardText>{props.gender}</CardText>
          <CardText>Height: {props.height}</CardText>
          <CardText>Hair Color: {props.hair_color}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
}