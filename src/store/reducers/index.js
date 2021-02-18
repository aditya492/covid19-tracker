import Calculatedata from '../../utils/Calculatedata'
const myState={
	  confirmed:0,
          recovered:0,
          deceased:0,
          tested:0,
          vaccinated:0,
          loading:true,
          districts:{},
          data:{}
}


const mainreducer=(state=myState,action)=>{

  switch(action.type){

   case 'FETCH_REQUEST':
   return{
   	...state,
   	loading:true
   }


  	case 'FETCH_SUCCESS':
  	const result=Calculatedata(action.payload) 
  	return{
  		  ...state,
  		  loading:false,
  		  data:action.payload,
          confirmed:result.confirmed,
          recovered:result.recover,
          deceased:result.deceased,
          tested:result.tested,
          vaccinated:result.vaccinated,
          
  	};
 

   case 'ERROR':
   return{
   	error:action.payload,
   }

  	default:
  	return state;
  }
  
};

export default mainreducer;



//BACKUP CODE

// import Calculatedata from '../../utils/Calculatedata'

// const mainreducer=(state={},action)=>{

//   switch(action.type){
//   	case 'FETCH_START':
//   	const result=Calculatedata(action.payload) 
//   	return{loading:false,
//   		  data:action.payload,
//           confirmed:result.confirmed,
//           recovered:result.recover,
//           deceased:result.deceased,
//           tested:result.tested,
//           vaccinated:result.vaccinated,
//   	};
 
    
   

//   	default:
//   	return state;
//   }
  
// };

// export default mainreducer;