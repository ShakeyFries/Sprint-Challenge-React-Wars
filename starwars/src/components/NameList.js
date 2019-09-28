import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { Card, CardText, CardBody, CardTitle, CardImg } from "reactstrap";

export default function NameList(props){
  return(
      <div className = "name-list" key={props.id}>
            <p>{props.name}</p>
            <p>{props.gender}</p>
            <p>{props.height}</p>
            <p>{props.hair_color}</p>
      </div>
  );
}