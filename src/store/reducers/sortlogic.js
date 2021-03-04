export const sortData=(reduxData,sortBy,isAsc)=>{

    if(isAsc==false){
    
    switch(sortBy){

    	case 'states':
          const StatesData=reduxData.sort((a,b)=>(b.name).localeCompare(a.name))
		  return StatesData
          break;

	   case 'deceased':
	      const DeceasedData=reduxData.sort((a,b)=>(b.deceased)-(a.deceased))
	      return DeceasedData
		  break;

	  case 'recover':
	      const recoverData=reduxData.sort((a,b)=>(b.recovered)-(a.recovered))
		  return recoverData
		  break;


	  case 'vaccinated':
	      const vaccinatedData=reduxData.sort((a,b)=>(b.vaccinated)-(a.vaccinated))
		  return vaccinatedData
		  break;

	  case 'confirm':
	      const confirmData=reduxData.sort((a,b)=>(b.confirmed)-(a.confirmed))
		  return confirmData
		  break;


	 case 'tested':
	      const testedData=reduxData.sort((a,b)=>(b.tested)-(a.tested))
		  return testedData
		  break;

    }

}


 if(isAsc==true){
  
    switch(sortBy){

    	case 'states':
          const StatesData=reduxData.sort((a,b)=>(a.name).localeCompare(b.name))
		  return StatesData
          break;

	   case 'deceased':
	      const DeceasedData=reduxData.sort((a,b)=>(a.deceased)-(b.deceased))
	      return DeceasedData
		  break;

	  case 'recover':
	      const recoverData=reduxData.sort((a,b)=>(a.recovered)-(b.recovered))
		  return recoverData
		  break;


	  case 'vaccinated':
	      const vaccinatedData=reduxData.sort((a,b)=>(a.vaccinated)-(b.vaccinated))
		  return vaccinatedData
		  break;

	  case 'confirm':
	      const confirmData=reduxData.sort((a,b)=>(a.confirmed)-(b.confirmed))
		  return confirmData
		  break;


	 case 'tested':
	      const testedData=reduxData.sort((a,b)=>(a.tested)-(b.tested))
		  return testedData
		  break;

    }

}
}
 


