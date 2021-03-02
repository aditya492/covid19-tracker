import {sortData} from './sortlogic';

const myState={
	        
          loading:true,
          districts:[],
          data:[],
          toggle:false,
        
        
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
   const sorting=sortData(action.data,action.sortBy,action.toggle) 
   return{
       data:sorting,
       dataObject:action.dataObject,
       toggle:action.toggle
   }
   

   // case 'IS_ASC':
   // const finalSort=sortlogic(action.data)
   // console.log("action",action.sortBy)
   // return{
   //    data:finalSort,
   //    toggle:!state.toggle,
   //    dataObject:action.dataObject,

   // }
    
   // case 'IS_CON':
   // const finalConf=sortConf(action.data)
   // console.log("action",finalConf)
   // return{
   //    data:finalConf,
   //    toggle:!state.toggle,
   //    dataObject:action.dataObject,
   // }

   // case 'IS_TES':
   // const finalTes=sortTes(action.data)
  
   // return{
   //    data:finalTes,
   //    toggle:!state.toggle,
   //    dataObject:action.dataObject,
   // }
    


   // case 'IS_DES':
   // const data=sortDesc(action.payload)
   // return{
   //   data:data,

   // }
   

  	default:
  	return state;
  }
  
};

export default mainreducer;


