import axios from 'axios';
import lscache from 'lscache';


const getCovidData=async()=>{
 const localData=lscache.get("covid")

 if(localData){
 	return new Promise(resolve=>resolve(JSON.parse(localData)))
 }

 else{ 
 	try{
       const resp= await axios.get("https://cors-anywhere.herokuapp.com/https://api.covid19india.org/v4/min/data.min.json")
        	 	    lscache.set("covid",JSON.stringify(resp),60)
        	 	 return new Promise(resolve=> resolve(resp)) 
 	} catch(err){
 		
 	}
 }
}

export const setLocalData=(key,value)=>{
   const storage=localStorage.setItem(key,JSON.stringify(value))
  return storage;
}

export const getLocalData=(getValue)=>{
	const storage=localStorage.getItem(getValue)
	return storage;
}


export default getCovidData;


