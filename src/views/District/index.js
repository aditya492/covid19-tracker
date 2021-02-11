import React,{Component} from 'react';
import Card from '../../common/Card';
import axios from  'axios';
import State_List from '../../helper/Statelist';
import NumberFormat from 'react-number-format';
import {Link} from 'react-router-dom';
import 'tachyons';
import './district.css';
import getCovidData from '../../utils/Storage';
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

       const{
             error,
             arr,
             loading
        } =this.state;
     
          const reuseMatchid= this.props.match.params.id 
      

          const confirmed=loading ? null:arr[reuseMatchid].total.confirmed;
          const recovered=loading ? null:arr[reuseMatchid].total.recovered;
          const deceased=loading ? null:arr[reuseMatchid].total.deceased;
          const tested=loading ? null:arr[reuseMatchid].total.tested;
          const vaccinated=loading ? null:arr[reuseMatchid].total.vaccinated; 
        
         
    

      
      const inputHandler=(e)=>{
          this.setState({searchterm:e.target.value})
      }

    
    
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
            
            <input className="sta891stateInput shadow-5" onChange={inputHandler} placeholder="&#128269; Enter Your State here" style={{color: "white"}}></input> 
              
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
          {loading ? <h1 style={{textAlign:"center",color:"white"}}>Loading....</h1>:this.DistrictUI()}
         
			</>
			)
    }
    else{
      return <h1 style={{textAlign:"center",color:"white"}}>404 Error Not Found!!</h1>
    }
	}


//FUNCTION TO SHOW DISTRICT DATA
 DistrictUI=()=>{
   
   const matchID=this.props.match.params.id
  
   const match=this.state.arr[matchID]

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
export default District;