import React,{Component} from 'react';
import  {connect } from 'react-redux';      
import  {fetchStart,sortAsc} from '../../store/actions';
import {Link} from 'react-router-dom';
import NumberFormat from 'react-number-format';
import axios from  'axios';
import {BeatLoader} from 'react-spinners';


import State_List from '../../helper/Statelist';
import getCovidData from '../../utils/Storage';


import Card from '../../common/Card';

import Sidebar from '../Sidebar'

import 'tachyons';
import './district.css';




class District extends Component{
    constructor(props){
      super(props);
      this.state={
            arr:null,
            loading:true,
            error:false,
            statedata:[],
            searchterm:'',

      }
    }

  componentDidMount(){
    
   const checkData=this.props.fetchStart() ? null : this.props.fetchStart()   
    
  }
   
   

	render(){  


 
  const loadingg=this.props.covidData.loading
  const reduxData=this.props.covidData
  const cardData=this.props.covidData.dataObject

       const{
             error,
             arr,
             loading
        } =this.state;
     
          const reuseMatchid= this.props.match.params.id 
      

          const confirmed=loadingg ?null:cardData[reuseMatchid].total.confirmed;
          const recovered=loadingg ? null:cardData[reuseMatchid].total.recovered;
          const deceased=loadingg ? null:cardData[reuseMatchid].total.deceased;
          const tested=loadingg ? null:cardData[reuseMatchid].total.tested;
          const vaccinated=loadingg ? null:cardData[reuseMatchid].total.vaccinated; 
          
    
      if(!reduxData.error){
  		return(
			<>
			        <Sidebar/>
             <h1 className="sta891Cardh1C1">{State_List[this.props.match.params.id]}</h1>
         
                <Card
                confirmed={confirmed}
                recovered={recovered}
                tested={tested}
                deceased={deceased}
                vaccinated={vaccinated}         
               />     
          
             

        <div className="sta891Statediv28">
            
            <input className="sta891stateInput shadow-5" onChange={(e)=>this.inputHandler(e)} placeholder="&#128269; Enter Your State here" style={{color: "white"}}></input> 
              
              <div className="sta891SearchResult">
                 <div className="sta891SearchResult"><h3 className="sta891ResultsRow">{loadingg ?  <h1 style={{textAlign:"center",color:"white"}}><BeatLoader color='white'/></h1>: this.filterInputUI()}</h3></div>            
              </div>
                   
        </div> 

     
              <div className="sta891color_State_body">
                <li className="sta891Table_Header_">
                   <div className="sta891Col sta891Col-0">Districts</div>
                   <div className="sta891Col sta891Col-1">Confirmed</div>
                   <div className="sta891Col sta891Col-2">Tested</div>
                   <div className="sta891Col sta891Col-3">Recovered</div>
                   <div className="sta891Col sta891Col-4">Deceased</div>
                  
                </li>
          </div>
          {loadingg ? null :this.getDistrictUI()}
         
			</>
			)
    }
    else{
      return <h1 style={{textAlign:"center",color:"white"}}>404 Error Not Found!!</h1>
    }
	}



  inputHandler=(e)=>{
          this.setState({searchterm:e.target.value})
      }


//FUNCTION TO SHOW DISTRICT DATA
 getDistrictUI=()=>{
   
   const matchID=this.props.match.params.id
 
   const districtKeys=Object.keys(this.props.covidData.dataObject[matchID].districts)
     const reduxData=this.props.covidData.data

  console.log("dis. pge",reduxData)
  
  const map=reduxData.map(item=>{
     
    return item.data.districts
  })

 console.log(map,"msp")







  return(
     <>
     
    {districtKeys.map((item,i)=>{ 
                         
       const reuseDistrictMatch=this.props.covidData.dataObject[matchID].districts[item].total
     
      

       return <div style={{marginLeft:"110px"}}>
                    <ul className="sta891responsive-table">
                      <li className="sta891Statedata_table_row link dim black b shadow-5" >                         
                         <div className="sta891Col  sta891Col-0">{item}</div>
                         <div className="sta891Col  sta891Col-1">{isNaN(reuseDistrictMatch.confirmed) ? "N/A" : <NumberFormat value={reuseDistrictMatch.confirmed} displayType={'text'} thousandSeparator={true}/>}</div>
                         <div className="sta891Col  sta891Col-2">{isNaN(reuseDistrictMatch.tested)    ? "N/A" : <NumberFormat value={reuseDistrictMatch.tested} displayType={'text'} thousandSeparator={true}/>}</div>
                         <div className="sta891Col  sta891Col-3">{isNaN(reuseDistrictMatch.recovered) ? "N/A" : <NumberFormat value={reuseDistrictMatch.recovered} displayType={'text'} thousandSeparator={true}/>}</div> 
                         <div className="sta891Col  sta891Col-4">{isNaN(reuseDistrictMatch.deceased)  ? "N/A" : <NumberFormat value={reuseDistrictMatch.deceased} displayType={'text'} thousandSeparator={true}/>}</div>                                                                               
                        
                      </li> 
                    </ul>
               </div>
      })} 
    </>  
  )
}

filterInputUI=()=>{
     
   const statearray=Object.keys(State_List)
   
     const statemapping=statearray.filter((val,i)=>{
     const value=State_List[val]
     if(this.state.searchterm==""){
       return ;
     }
     else if(value.toLowerCase().includes(this.state.searchterm.toLowerCase())){
       return (
         <>value</>
         )

     }
   }).map((val,i)=>{
           
         return <Link to={val} style={{color:"white",textDecoration:"none"}}><div className="sta891Box">                     
                     {State_List[val]}                                                                                                                    
              </div></Link>
              
   })
   return(
   <>
      {statemapping}

     
   </>

   )
}

}




const mapStateToProps=state=>{
  return {covidData:state.covidData};
}


const mapDispatchToProps=(dispatch)=>{
  return{
   
    fetchStart:()=>dispatch(fetchStart()),
    sortconf:(final,id)=>dispatch(sortAsc(final,id))
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(District);







// getDistrictUI=()=>{
   
//    const matchID=this.props.match.params.id
 
//    const districtKeys=Object.keys(this.props.covidData.dataObject[matchID].districts)

  
  
//   return(
//      <>
     
//     {districtKeys.map((item,i)=>{ 
                         
//        const reuseDistrictMatch=this.props.covidData.dataObject[matchID].districts[item].total
       
//        return <div style={{marginLeft:"110px"}}>
//                     <ul className="sta891responsive-table">
//                       <li className="sta891Statedata_table_row link dim black b shadow-5" >                         
//                          <div className="sta891Col  sta891Col-0">{item}</div>
//                          <div className="sta891Col  sta891Col-1">{isNaN(reuseDistrictMatch.confirmed) ? "N/A" : <NumberFormat value={reuseDistrictMatch.confirmed} displayType={'text'} thousandSeparator={true}/>}</div>
//                          <div className="sta891Col  sta891Col-2">{isNaN(reuseDistrictMatch.tested)    ? "N/A" : <NumberFormat value={reuseDistrictMatch.tested} displayType={'text'} thousandSeparator={true}/>}</div>
//                          <div className="sta891Col  sta891Col-3">{isNaN(reuseDistrictMatch.recovered) ? "N/A" : <NumberFormat value={reuseDistrictMatch.recovered} displayType={'text'} thousandSeparator={true}/>}</div> 
//                          <div className="sta891Col  sta891Col-4">{isNaN(reuseDistrictMatch.deceased)  ? "N/A" : <NumberFormat value={reuseDistrictMatch.deceased} displayType={'text'} thousandSeparator={true}/>}</div>                                                                               
                        
//                       </li> 
//                     </ul>
//                </div>
//       })} 
//     </>  
//   )
// }
