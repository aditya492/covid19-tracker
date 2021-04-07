import React from 'react'
import axios from 'axios';

import{FETCH_REQUEST,FETCH_SUCCESS,ERROR,SORT_HOME_DATA,DISTRICT_DATA,SET_DISTRICT_DATA} from '../actioncreator'

import {getLocalData} from '../../utils/Storage'
import {tabledatatoarr,districtItem} from '../../utils/MaptoArr';
import getCovidData from '../../utils/Storage'


import State_List from '../../helper/Statelist'
import {sortData} from '../reducers/sortlogic'


export const  fetchCovidData=(matchid)=> async dispatch=>{
 dispatch(fetchRequest())
 try{
const response=await getCovidData();

const dataObject=response.data
const data=tabledatatoarr(response.data)
const indiaData=response.data['TT'];

const getData=getLocalData('sortBy')
const convertBack=JSON.parse(getData)

const getOrder=getLocalData('isAsc')
const convertOrder=JSON.parse(getOrder)





if(!matchid){
   if(getData && getOrder )
  {
      dispatch(fetchSuccess(sortData(data,convertBack,convertOrder),indiaData,dataObject))
  }
  else{
        dispatch(fetchSuccess(data,indiaData,dataObject))

  }
}

 else{
    const district= districtItem(dataObject,matchid)
      if(getData && getOrder){

              dispatch(setDistrictData(dataObject,data,matchid,sortData(district,convertBack,convertOrder)))  
       }
     else{
            dispatch(setDistrictData(dataObject,data,matchid,district))   
         }
    }

 }


catch(err){
	dispatch(error(err))
  }


}
export const fetchRequest=()=>{
	return{
		type:FETCH_REQUEST
	}
}



export const fetchSuccess=(users,indiaData,dataObject)=>{
   console.log("fetchsuccess")
	return{
		type:FETCH_SUCCESS,
		payload:users,
		indiaData:indiaData,
		dataObject:dataObject,
    // district:district,
	}
}

export const setDistrictData=(dataObject,homeData,matchID,district)=>{
  console.log("setdistrictdata")
   // const district= districtItem(dataObject,matchID) 
   return{
       type:SET_DISTRICT_DATA,
       dataObject:dataObject,
       district:district,
       data:homeData
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

 export const districtData=(district,object,homeData,isAsc,sortBy)=>{
   console.log("action ka match",district)

   return{
     type:DISTRICT_DATA,  
     // data:district,
     dataObject:object,    
     district:district,
     data:homeData,
     isAsc:isAsc,
     sortBy:sortBy
     // match:match
   }
 }



export const error=(err)=>{
   return{
       type:ERROR,
       payload:err
  }
}




export default fetchCovidData;
