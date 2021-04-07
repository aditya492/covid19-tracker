import {sortData,sortDistrict} from './sortlogic';
import {setLocalData} from '../../utils/Storage'


const myState={
	        
          loading:true,
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
          // district:action.district,
         
          
  	};
 

   case 'ERROR':
   return{
   	error:action.payload,
   }


  case 'SET_DISTRICT_DATA':
  return{
    dataObject:action.dataObject,
    district:action.district,
    data:action.data,
    isAsc:!state.isAsc
  }

   case 'SORT_HOME_DATA':
   const sorting=sortData(action.data,action.sortBy,action.isAsc) 
   
     
    
    setLocalData('sortBy',action.sortBy)
    setLocalData('isAsc',action.isAsc)

   return{
       data:sorting,
       dataObject:action.dataObject,    
       sortBy:action.sortBy,
       isAsc:action.isAsc,
       demo:null
      
   }
   
   case 'DISTRICT_DATA':
    const sorted=sortData(action.district,action.sortBy,action.isAsc)

   
    setLocalData('sortByDist',action.sortBy)
    setLocalData('isAscDist',action.isAsc)


   return{
     district:sorted,
     dataObject:action.dataObject,
     data:action.data,
     isAsc:action.isAsc,
     sortBy:action.sortBy
   }
   

  	default:
  	return state;
  }
  
};

export default mainreducer;


