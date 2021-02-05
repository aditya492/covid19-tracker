import React from "react";
import axios from 'axios';


const getCovidData=()=>{

 const localData=localStorage.getItem("covid")

 if(localData){
 	return new Promise(resolve=>resolve(JSON.parse(localData)))
 }

 else{ 
 	 axios.get("https://api.covid19india.org/v4/min/data.min.json")
 	 .then(res=>{
 	 	localStorage.setItem("covid",JSON.stringify(res))
 	 	return new Promise(resolve=> resolve(res)) 
 	 	
 	 })

 }
}

export default getCovidData;