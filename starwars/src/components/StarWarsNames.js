import React, {useState, useEffect} from 'react';
import axios from "axios";
import App from "../App";
import NameList from "./NameList";

export default function StarWarsNames() {
  const [names, setNames] = useState ([]);

  // const starNames = axios.get("https://swapi.co/api/people/");
  // console.log(starNames);
  useEffect (() => {
    axios
      .get ("https://swapi.co/api/people/")
      .then( result => {
        setNames(result.data.results)
        console.log(result);
      })
      .catch( err =>{
        console.log(err);
      })
  }, []);

      return(
        <div className = 'names'>
          {names.map((star) => {
          return (<NameList 
            name={star.name}
            gender={star.gender}
            height={star.height}
            hair={star.hair_color}
          />
          )}
      )}
    </div>
  );
}