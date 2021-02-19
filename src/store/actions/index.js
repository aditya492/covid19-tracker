import axios from 'axios';
import{FETCH_REQUEST,FETCH_SUCCESS,ERROR} from '../actioncreator'



export const  fetchStart=()=> async dispatch=>{
 dispatch(fetchRequest())
 try{
 const response= await axios.get("https://api.covid19india.org/v4/min/data.min.json");
 const users=response.data
 dispatch(fetchSuccess(users));
} catch(err){
	dispatch(error(err))
  }
}


export const fetchRequest=()=>{
	return{
		type:FETCH_REQUEST
	}
}



export const fetchSuccess=(users)=>{
	return{
		type:FETCH_SUCCESS,
		payload:users
	}
}



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




  