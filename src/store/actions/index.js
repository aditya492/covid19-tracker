import axios from 'axios';
import{FETCH_REQUEST,FETCH_SUCCESS,ERROR,IS_ASC,IS_DES,IS_CON,SORT_HOME_DATA} from '../actioncreator'
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

export const sortAsc=(sortData,sortBy,dataObject,toggle)=>{
	console.log("toggle",toggle)
	if(toggle==true){
   return{
   	type:SORT_HOME_DATA,
   	sortBy:sortBy,
   	data:sortData,
   	dataObject:dataObject,
   	toggle:toggle,
   }
}

if(toggle==false){
		return {
    type:SORT_HOME_DATA,
   	sortBy:sortBy,
   	data:sortData,
   	dataObject:dataObject,
   	toggle:toggle,
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







//backupcode

// import axios from 'axios';


// export const  fetchStart=()=> async dispatch=>{
//  const response= await axios.get("https://api.covid19india.org/v4/min/data.min.json");
//  dispatch({type:'FETCH_START',payload:response.data});
// }
// export const sortAsc=(sortData,id,dataObject)=>{
//     if(id=='states'){
//     return{
//     	type:IS_ASC,
//     	data:sortData,
//         dataObject:dataObject
//     }
// }
//      if(id=='confirm'){
//     	return{
//     	type:IS_CON,
//         data:sortData,
//          dataObject:dataObject
//     }
// }
//     if(id=='tested'){
//     	return{
//     		type:IS_TES,
//     		data:sortData,
//     		 dataObject:dataObject
//     	}
//     }

// }



  