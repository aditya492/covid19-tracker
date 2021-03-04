import {sortData} from './sortlogic';

const myState={
	        
          loading:true,
          districts:[],
          data:[],
          isAsc:false,
        
        
}


const mainreducer=(state=myState,action)=>{

  switch(action.type){

   case 'FETCH_REQUEST':
   return{
   	...state,
   	loading:true
   }


  	case 'FETCH_SUCCESS':

  	return{
  		   ...state,
  		    loading:false,
  		    data:action.payload,
          confirmed:action.indiaData.total.confirmed,
          recovered:action.indiaData.total.recovered,
          deceased:action.indiaData.total.deceased,
          tested:action.indiaData.total.tested,
          vaccinated:action.indiaData.total.vaccinated,
          dataObject:action.dataObject,
          
  	};
 

   case 'ERROR':
   return{
   	error:action.payload,
   }




   case 'SORT_HOME_DATA':
   const sorting=sortData(action.data,action.sortBy,action.isAsc) 
   return{
       data:sorting,
       dataObject:action.dataObject,    
       sortBy:action.sortBy,
      
   }
   

   

  	default:
  	return state;
  }
  
};

export default mainreducer;


