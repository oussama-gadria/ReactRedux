import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
export default function  PersonListFunc()     {

  const [persons, setPersons]= useState([]);
  
    
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
        const result = res.data;
        setPersons(result);
        })
   
  }, []);
  
  
    return (
      <ul>
         
        { persons.map((person, i) => (
          <li key={i}>{person.name}</li>
        ))}
      </ul>
    );
  }


