import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import NumberFormat from 'react-number-format';

import './home.css';

import Card from '../../common/Card'
import StateSearchBar from '../../common/StateSearchBar';

import Calculatedata from '../../utils/Calculatedata';
import getCovidData from '../../utils/Storage';

import {BsSearch} from "react-icons/bs";
import {GoAlert} from "react-icons/go";
import {RiDeviceRecoverLine} from "react-icons/ri";
import {AiFillMedicineBox} from "react-icons/ai";
import {FcCalendar} from "react-icons/fc";
import {FaArrowAltCircleRight} from "react-icons/fa";
import {GiHypodermicTest,GiConfirmed,GiAbstract033} from "react-icons/gi";
import 'tachyons';

import State_List from '../../helper/Statelist';

import Sidebar from '../Sidebar'



class Home extends Component{
	constructor(props){
       super(props);
       this.state={
       	    statedata:[],
       	    loading:false,
       	    searchterm:'',
            error:false,                      
       }
	}

      
      
componentDidMount(){
     this.setState({
       loading:true,
     })

     getCovidData()
     .then(res=>{
       
      const result=Calculatedata(res.data)
          this.setState({
           statedata:res.data,
           loading:false,
           confirmed:result.confirmed,
           tested:result.tested,
           deceased:result.deceased,          
           recover:result.recover,
           vaccinated:result.vaccinated,
         })
             

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
             vaccinated,
             error,
             loading,
             statedata,
        } =this.state;

      

    if(!error){ 
		return(
			<>

         
			 <h1 className="sta891MainH1"> <GoAlert/> Corona Outbreak!!! <GoAlert/></h1><span className="sta891MainSpan sta891MainH1 ">Let's Check Data!!</span>
			  <Sidebar/>
        <div style={{backgroundColor:"gainsboro",marginTop:"12px"}}>
          <h2 className="sta891HomeIndia">India</h2>
         </div>
         <div className="sta891main001">
			   <Card
            confirmed={confirmed}
            tested={tested}
            deceased={deceased}
            recovered={recover}
            vaccinated={vaccinated}
         />
        

              		    
       </div>
     
         <StateSearchBar/>

        <div className="sta891CurrentDate"><FcCalendar style={{fontSize:"25px"}}/><span>{this.currentdate()}</span></div>

         
         
          <div className="sta891color_State_body">

                <li className="sta891Table_Header_ ">
                  <div className="sta891Col sta891Col-0">States/UT</div>
                   <div className="sta891Col sta891Col-1">Confirmed</div>
                   <div className="sta891Col sta891Col-2">Tested</div>
                   <div className="sta891Col sta891Col-3">Recovered</div>
                   <div className="sta891Col sta891Col-4">Deceased</div>
                   <div className="sta891Col sta891Col-5">Vaccinated</div>
                </li>
          </div>
          
          

         <div style={{marginLeft:"110px"}}>{this.statetableUI()}</div>

          <h1 style={{textAlign:"center",color:"white"}}>{loading?"Please Wait...":""}</h1>
			</>
         
			)
    }
   else{
      return <h1 style={{textAlign:"center"}}>404 Error Not Found!!</h1>
    }
	}


//FUNTION TO SHOW DATA

statetableUI=()=>{
  const {statedata}=this.state
  const key=Object.keys(statedata)
    
  return(
     <>
    
     {key.map((val,i)=>{

                        
          const reuseStatedata=statedata[val]

          return <Link to={"state/"+val} style={{textDecoration:"none"}}>
                    <ul>
                   
                      <li className="sta891Statedata_table_row  link dim black b shadow-5" style={{cursor:"pointer"}}>
                        
                         <div className="sta891Col   sta891Col-0">{State_List[val]}</div>
                         <div className="sta891Col   sta891Col-1"><NumberFormat value={reuseStatedata.total.confirmed} displayType={'text'} thousandSeparator={true}/></div>
                         <div className="sta891Col   sta891Col-2"><NumberFormat value={reuseStatedata.total.tested} displayType={'text'} thousandSeparator={true}/></div>
                         <div className="sta891Col   sta891Col-3"><NumberFormat value={reuseStatedata.total.recovered} displayType={'text'} thousandSeparator={true}/></div>
                         <div className="sta891Col   sta891Col-4"><NumberFormat value={reuseStatedata.total.deceased} displayType={'text'} thousandSeparator={true}/></div>
                         <div className="sta891Col   sta891Col-5"><NumberFormat value={reuseStatedata.total.vaccinated} displayType={'text'} thousandSeparator={true}/></div>                                                                  
                        
                       </li>
                      
                   </ul>
                 </Link>
                                            
                  
      })} 
     </>
  )
}



//FUNCTION to show search input

filterInputUI=()=>{
   const statearray=Object.keys(State_List)
   const{searchterm}=this.state;
     const statemapping=statearray.filter((val,i)=>{
     const value=State_List[val]
     if(searchterm==""){
       return ;
     }
     else if(value.toLowerCase().includes(searchterm.toLowerCase())){
       return value;
        
         

     }
   }).map((val,i)=>{
           
         return <Link to={"state/"+val} style={{color:"white",textDecoration:"none"}}><div className="sta891Box">
                  {State_List[val]}                                                                                                 
              </div></Link>
   })
   return(
   <>
      {statemapping}
   </>

   )
}

//Function to show date and time

currentdate=()=>{

const realdate = new Date();
const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(realdate);
const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(realdate);
const date = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(realdate);
const finalDate=(`${date}-${month}-${year}`);
 return(
 <>
 <h3>{finalDate}</h3>
 </>
 )
}

}

export default Home;