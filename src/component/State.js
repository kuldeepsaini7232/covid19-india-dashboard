import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';



const State=()=>{
    const [data,setData]=useState([]);
    const getCovidData= async ()=>{
        const res= await fetch('https://api.covid19india.org/data.json');
        const data= await res.json();
        setData(data.statewise);
    }
    useEffect(()=>{
      getCovidData();
    },[])
    return(
        <>
        <h1 className="text-center my-3">COVID19 INDIA DASHBOARD</h1>
        <Table striped>
      <thead>
        <tr>
          <th>State</th>
          <th>Confirmed</th>
          <th>recovered</th>
          <th>deaths</th>
          <th>active</th>
          <th>updated</th>
        </tr>
      </thead>
      <tbody>
          {
             data.map((currentElement,index)=>{
              return(
                <tr key={index}>
          <th scope="row">{currentElement.state}</th>
          <td>{currentElement.confirmed}</td>
          <td>{currentElement.recovered}</td>
          <td>{currentElement.deaths}</td>
          <td>{currentElement.active}</td>
          <td>{currentElement.lastupdatedtime}</td>
        </tr>
              )
             })
          }
      </tbody>
    </Table>
        </>
    )
}

export default State;