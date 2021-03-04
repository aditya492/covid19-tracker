import axios from 'axios';
import{FETCH_REQUEST,FETCH_SUCCESS,ERROR,SORT_HOME_DATA} from '../actioncreator'
import {tabledatatoarr} from '../../utils/MaptoArr';
import State_List from '../../helper/Statelist'


export const  fetchStart=()=> async dispatch=>{
 dispatch(fetchRequest())
 try{

const response= await axios.get("https://api.covid19india.org/v4/min/data.min.json"); 
const dataObject=response.data
const data=tabledatatoarr(response.data)
const indiaData=response.data['TT'];
   
 dispatch(fetchSuccess(data,indiaData,dataObject));


  
} catch(err){
	dispatch(error(err))
  }


}


export const fetchRequest=()=>{
	return{
		type:FETCH_REQUEST
	}
}



export const fetchSuccess=(users,indiaData,dataObject)=>{
	return{
		type:FETCH_SUCCESS,
		payload:users,
		indiaData:indiaData,
		dataObject:dataObject
	}
}



export const sortAsc=(sortData,sortBy,dataObject,isAsc)=>{
  console.log("toggle",isAsc)
  if(isAsc==true){
   return{
     type:SORT_HOME_DATA,
     sortBy:sortBy,
     isAsc:isAsc,
     data:sortData,
     dataObject:dataObject,
    
   }
}

if(isAsc==false){
    return {
     type:SORT_HOME_DATA,
     sortBy:sortBy,
     data:sortData,
     dataObject:dataObject,
     isAsc:isAsc
}
}

 }




// export const sortDes=(users)=>{
//   return{
//       type:IS_DES,
//       payload:users
//   }
// }

export const error=(err)=>{
   return{
       type:ERROR,
       payload:err
  }
}





// export const sortAsc=(sortData,sortBy,dataObject,isAsc)=>{
//   console.log("toggle",isAsc)
//   if(isAsc==true){
//    return{
//      type:SORT_HOME_DATA,
//      sortBy:sortBy,
//     isAsc:isAsc,
//      data:sortData,
//      dataObject:dataObject,
    
//    }
// }

// if(isAsc==false){
//     return {
//     type:SORT_HOME_DATA,
//      sortBy:sortBy,
//      data:sortData,
//      dataObject:dataObject,
//     isAsc:isAsc
// }
// }

//  }
