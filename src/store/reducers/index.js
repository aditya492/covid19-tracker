import {sortData,sortDistrict} from './sortlogic';

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
          district:action.district,
         
          
  	};
 

   case 'ERROR':
   return{
   	error:action.payload,
   }




   case 'SORT_HOME_DATA':
   const sorting=sortData(action.data,action.sortBy,action.isAsc) 
   
     
    localStorage.setItem('sortBy',JSON.stringify(action.sortBy))
    localStorage.setItem('isAsc',JSON.stringify(action.isAsc))


   return{
       data:sorting,
       dataObject:action.dataObject,    
       sortBy:action.sortBy,
       isAsc:action.isAsc,
      
   }
   
   case 'DISTRICT_DATA':
  
      // const districtKeys=Object.keys(action.dataob[action.match].districts)
    const sorted=sortDistrict(action.district)
    console.log("sortedd",action.district)
   return{
     match:action.match,
     district:sorted,
     dataObject:action.dataObject,
     data:action.data,
     // isAsc:action.isASc,
     // sortBy:action.sortBy
   }
   

  	default:
  	return state;
  }
  
};

export default mainreducer;


