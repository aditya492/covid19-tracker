import React,{Component} from 'react';
import Card from '../../common/Card';
import axios from  'axios';
import Statelist from '../../utils/Statelist';
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

      }
    }

  componentDidMount(){
     
      getCovidData()
     .then(res=>{
          const reuseMatchid= this.props.match.params.id            
          this.setState({
          arr:res.data,
          loading:false,
          confirmed:res.data[reuseMatchid].total.confirmed,
          recover:res.data[reuseMatchid].total.recovered,
          tested:res.data[reuseMatchid].total.tested,
          deceased:res.data[reuseMatchid].total.deceased,
          vaccinated:res.data[reuseMatchid].total.vaccinated,                
         })            
     })
     .then(err=>{
       
     })
     .catch((e)=>{
       this.setState({
         error:true,
       })
     })
  }
   
   

	render(){  

       const{confirmed,
             recover,
             tested,
             deceased,
             vaccinated
        } =this.state;

   
  
      if(!this.state.error){
  		return(
			<>
			        <Sidebar/>
             <h1 className="sta891Cardh1C1">{Statelist[this.props.match.params.id]}</h1>
               <Card
                confirmed={confirmed}
                recovered={recover}
                tested={tested}
                deceased={deceased}
                vaccinated={vaccinated}         
               />

               
              <div className="sta891color_State_body">
                <li className="sta891Table_Header_">
                   <div className="sta891col sta891col-0">Districts</div>
                   <div className="sta891col sta891col-1">Confirmed</div>
                   <div className="sta891col sta891col-2">Tested</div>
                   <div className="sta891col sta891col-3">Recovered</div>
                   <div className="sta891col sta891col-4">Deceased</div>
                  
                </li>
          </div>
          {this.state.loading ? <h1 style={{textAlign:"center",color:"white"}}>Loading....</h1>:this.DistrictUI()}
         
			</>
			)
    }
    else{
      return <h1 style={{textAlign:"center",color:"white"}}>404 Error Not Found!!</h1>
    }
	}


//FUNCTION TO SHOW DISTRICT DATA
// <NumberFormat value={match.districts[val].total.recovered}displayType={'text'} thousandSeparator={true}/><sup style={{color:"#483d8b"}}>R</sup>
 // <NumberFormat value={match.districts[val].total.tested}displayType={'text'} thousandSeparator={true}/> </div>
  DistrictUI=()=>{
   
   const matchID=this.props.match.params.id
  
   const match=this.state.arr[matchID]

   const districtKeys=Object.keys(match.districts)
   
  
  return(
     <>
     
     {districtKeys.map((val,i)=>{                             
                  const reuseDistrictMatch=match.districts[val].total
                  if(reuseDistrictMatch.tested===undefined){
                    reuseDistrictMatch.tested="N/A"
                  }
       return <div style={{marginLeft:"110px"}}>
                    <ul className="sta891responsive-table">
                      <li className="sta891Statedata_table_row link dim black b shadow-5" style={{cursor:"pointer"}}>                         
                         <div className="sta891col  sta891col-0">{val}</div> 
                         <div className="sta891col  sta891col-1"><NumberFormat value={reuseDistrictMatch.confirmed} displayType={'text'} thousandSeparator={true}/></div> 
                         <div className="sta891col  sta891col-2">{reuseDistrictMatch.tested}</div>
                         <div className="sta891col  sta891col-3"><NumberFormat value={reuseDistrictMatch.recovered}displayType={'text'} thousandSeparator={true}/></div> 
                         <div className="sta891col  sta891col-4"><NumberFormat value={reuseDistrictMatch.deceased}displayType={'text'} thousandSeparator={true}/></div>                                                                               
                        
                      </li>
                    </ul>
               </div>
      })} 
     </>
  )
}

// parthbhatey=()=>{
// const matchID=this.props.match.params.id;
// const match=this.state.arr[matchID];
// const districtKeys=Object.keys(match.districts);

//  {districtKeys.map((val,i)=>{                             
//       const reuseDistrictMatch=match.districts[val].total
//        if(reuseDistrictMatch.tested===undefined){
//          reuseDistrictMatch.tested="Not Available"
//        }
//        return <div style={{marginLeft:"110px"}}>
//                     <ul class="sta891responsive-table">
//                     <NumberFormat value={reuseDistrictMatch.tested}displayType={'text'} thousandSeparator={true}/>
//                     </ul>
//                </div>
//       })} 
// }

}
export default District;