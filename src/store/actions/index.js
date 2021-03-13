import React from 'react'
import axios from 'axios';
import{FETCH_REQUEST,FETCH_SUCCESS,ERROR,SORT_HOME_DATA,DISTRICT_DATA} from '../actioncreator'
import {tabledatatoarr,districtItem} from '../../utils/MaptoArr';
import State_List from '../../helper/Statelist'
import {sortData} from '../reducers/sortlogic'



export const  fetchStart=(matchid)=> async dispatch=>{

 dispatch(fetchRequest())
 try{
//dkhoooo voo yee jo district const dikh rha haiiiiii nicheeek me and understad you .. let it chec
const response= await axios.get("https://api.covid19india.org/v4/min/data.min.json");
console.log("response",response) 
const dataObject=response.data
const data=tabledatatoarr(response.data)
const indiaData=response.data['TT'];

 const district=matchid ? districtItem(dataObject,matchid) : null

const getData=localStorage.getItem('sortBy')
const convertBack=JSON.parse(getData)

const getOrder=localStorage.getItem('isAsc')
const convertOrder=JSON.parse(getOrder)

  if(getData && getOrder)
  {
      dispatch(fetchSuccess(sortData(data,convertBack,convertOrder),indiaData,dataObject,district))

  }
  else{
        dispatch(fetchSuccess(data,indiaData,dataObject,district))

  }

  
} catch(err){
	dispatch(error(err))
  }


}


export const fetchRequest=()=>{
	return{
		type:FETCH_REQUEST
	}
}



export const fetchSuccess=(users,indiaData,dataObject,district)=>{

	return{
		type:FETCH_SUCCESS,
		payload:users,
		indiaData:indiaData,
		dataObject:dataObject,
    district:district,
	}
}



export const sortAsc=(sortData,sortBy,dataObject,isAsc)=>{
    
   return{
     type:SORT_HOME_DATA,
     sortBy:sortBy,
     isAsc:isAsc,
     data:sortData,
     dataObject:dataObject,
    
   }

 }

 export const districtData=(district,object,homeData)=>{
   console.log("action ka match",district)

   return{
     type:DISTRICT_DATA,  
     // data:district,
     dataObject:object,    
     district:district,
     data:homeData,
     // isAsc:isAsc,
     // sortBy:sortBy
     // match:match
   }
 }



export const error=(err)=>{
   return{
       type:ERROR,
       payload:err
  }
}





