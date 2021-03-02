export const sortData=(reduxData,sortBy,toggle)=>{

    if(toggle==false){
	if(sortBy=='states')
	{		
          const sortData=reduxData.sort((a,b)=>(b.name).localeCompare(a.name))
		return sortData	
	}

	if(sortBy=='recover')
	{
		const sortData=reduxData.sort((a,b)=>(b.recovered)-(a.recovered))
		return sortData
	}

	if(sortBy=='deceased')
	{
		const sortData=reduxData.sort((a,b)=>(b.deceased)-(a.deceased))
		return sortData
	}

	if(sortBy=='vaccinated')
	{
		const sortData=reduxData.sort((a,b)=>(b.vaccinated)-(a.vaccinated))
		return sortData
	}

	if(sortBy=='confirm')
	{
		const sortData=reduxData.sort((a,b)=>(b.confirmed)-(a.confirmed))
		return sortData
	}

	if(sortBy=='tested')
	{
		const sortData=reduxData.sort((a,b)=>(b.tested)-(a.tested))
		return sortData
	}
 }

 if(toggle==true){
  
    if(sortBy=='states')
	{
		const sortData=reduxData.sort((a,b)=>(a.name).localeCompare(b.name))
		return sortData
	}
	if(sortBy=='recover')
	{
		const sortData=reduxData.sort((a,b)=>(a.recovered)-(b.recovered))
		return sortData
	}
	if(sortBy=='deceased')
	{
		const sortData=reduxData.sort((a,b)=>(a.deceased)-(b.deceased))
		return sortData
	}
	if(sortBy=='vaccinated')
	{
		const sortData=reduxData.sort((a,b)=>(a.vaccinated)-(b.vaccinated))
		return sortData
	}
	if(sortBy=='confirm')
	{
		const sortData=reduxData.sort((a,b)=>(a.confirmed)-(b.confirmed))
		return sortData
	}
	if(sortBy=='tested')
	{
		const sortData=reduxData.sort((a,b)=>(a.tested)-(b.tested))
		return sortData
	}
 }
		
}
 


