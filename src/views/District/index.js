import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import NumberFormat from 'react-number-format';
import axios from  'axios';
import {BeatLoader} from 'react-spinners';

import Card from '../../common/Card';

import State_List from '../../helper/Statelist';

import getCovidData from '../../utils/Storage';

import 'tachyons';
import './district.css';

import  {connect } from 'react-redux';      
import  {fetchStart} from '../../store/actions';


import Sidebar from '../Sidebar'



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
     
    this.props.fetchStart()

      getCovidData()
     .then(res=>{
                  
          this.setState({
          arr:res.data,
          loading:false,
                 
         })  
                
     })
     .catch((e)=>{
       this.setState({
         error:true,
       })
     })
  }
   
   

	render(){  


  console.log("distr data",this.props.covidData.loading) 
  const loadingg=this.props.covidData.loading
  const reduxData=this.props.covidData.data
       const{
             error,
             arr,
             loading
        } =this.state;
     
          const reuseMatchid= this.props.match.params.id 
      

          const confirmed=loadingg ?null:reduxData[reuseMatchid].total.confirmed;
          const recovered=loadingg ? null:reduxData[reuseMatchid].total.recovered;
          const deceased=loadingg ? null:reduxData[reuseMatchid].total.deceased;
          const tested=loadingg ? null:reduxData[reuseMatchid].total.tested;
          const vaccinated=loadingg ? null:reduxData[reuseMatchid].total.vaccinated; 
          
    
      if(!error){
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
                 <div className="sta891SearchResult"><h3 className="sta891ResultsRow">{loading ? <h1 style={{textAlign:"center",color:"white"}}>Loading....</h1>: this.filterInputUI()}</h3></div>            
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
          {loading ? <h1 style={{textAlign:"center",color:"white"}}>Loading....</h1>:this.getDistrictUI()}
         
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
  
   const match=this.props.covidData.data[matchID]

   const districtKeys=Object.keys(match.districts)
   
  
  
  
  return(
     <>
     
    {districtKeys.map((val,i)=>{ 

                  
       const reuseDistrictMatch=match.districts[val].total
                 
       return <div style={{marginLeft:"110px"}}>
                    <ul className="sta891responsive-table">
                      <li className="sta891Statedata_table_row link dim black b shadow-5" >                         
                         <div className="sta891Col  sta891Col-0">{val}</div>
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

export default connect(mapStateToProps,{fetchStart})(District);