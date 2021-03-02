const initial={
	            data:{},
	            loading:true,
	           
}

const NotiReducer=(state=initial,action)=>{
  
  switch(action.type){

  	case 'FETCH_NOTIFICATION_REQ':
  	return{
  		...state,
  		loading:true,
  	}

  	case  'FETCH_NOTIFICATION_SUCCESS':
  	return{
  		...state,
  		data:action.payload,
  		loading:false,
  	}


  	case  'FETCH_NOTIFICATION_ERROR':
  	return{
         error:action.payload
  	}

  	default:
  	return state;
  }
}


export default NotiReducer;