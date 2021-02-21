import axios from 'axios';
import {FETCH_NOTIFICATION_REQ,
	    FETCH_NOTIFICATION_SUCCESS,
	    FETCH_NOTIFICATION_ERROR} from '../actioncreator';

export const fetchNotiData=()=>async dispatch=>{
	dispatch(fetchNotiReq())
  try{
  	const resp=await axios.get("https://api.covid19india.org/updatelog/log.json")
  	const userData=resp
  	dispatch(fetchNotiSuc(userData))
  }
  catch(err){
     dispatch(fetchNotiErr(err))
  }
}


export const fetchNotiReq=()=>{
 return {
 	type:FETCH_NOTIFICATION_REQ,
 }
}


export const fetchNotiSuc=(userData)=>{
	return{
		type:FETCH_NOTIFICATION_SUCCESS,
		payload:userData
	}
}



export const fetchNotiErr=(err)=>{
	return{
	type:FETCH_NOTIFICATION_ERROR,
	payload:err
}
}