import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './home.css';
import Card from '../../common/Card'
import NumberFormat from 'react-number-format';
import Calculatedata from '../../utils/Calculatedata';
import {BsSearch} from "react-icons/bs";
import {GoAlert} from "react-icons/go";
import 'tachyons';
import Statelist from '../../utils/Statelist';
import {GiHypodermicTest,GiConfirmed,GiAbstract033} from "react-icons/gi";
import {RiDeviceRecoverLine} from "react-icons/ri";
import {AiFillMedicineBox} from "react-icons/ai";
import {FcCalendar} from "react-icons/fc";
import {FaArrowAltCircleRight} from "react-icons/fa";
import getCovidData from '../../utils/Storage';
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
       console.log("ghgh",e)
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
       <div className="sta891Statediv28">
                 
            <input className="sta891stateInput" onChange={(e)=>this.setState({searchterm:e.target.value})} placeholder="&#128269; Enter Your State here" style={{color: "white"}}></input>
              
              <div className="sta891SearchResult">
                 <div className="sta891SearchResult"><h3>{this.filterInputUI()}</h3></div>             
              </div>         
        </div> 

        <div className="sta891CurrentDate"><FcCalendar style={{fontSize:"25px"}}/><span>{this.currentdate()}</span></div>

         
         
          <div className="sta891color_State_body">

                <li className="sta891Table_Header_ ">
                  <div className="sta891col sta891col-0">States/UT</div>
                   <div className="sta891col sta891col-1">Confirmed</div>
                   <div className="sta891col sta891col-2">Tested</div>
                   <div className="sta891col sta891col-3">Recovered</div>
                   <div className="sta891col sta891col-4">Deceased</div>
                   <div className="sta891col sta891col-5">Vaccinated</div>
                </li>
          </div>
          
          

         <div style={{marginLeft:"110px"}}>{this.statetableUI()}</div>

          <h1 style={{textAlign:"center",color:"white"}}>{this.state.loading?"Please Wait...":""}</h1>
			</>
         
			)
    }
   else{
      return <h1 style={{textAlign:"center"}}>404 Error Not Found!!</h1>
    }
	}


//FUNTION TO SHOW DATA
// <NumberFormat value={this.state.statedata[val].total.tested} displayType={'text'} thousandSeparator={true}/>

statetableUI=()=>{
  const key=Object.keys(this.state.statedata)
    
  return(
     <>
    
     {key.map((val,i)=>{

                        
          const reuseStatedata=this.state.statedata[val]

          return <div className="hoverul">
                    <ul>
                    <div className="asd">
                      <li className="sta891Statedata_table_row link dim black b shadow-5" style={{cursor:"pointer"}}>
                        
                         <div className="sta891col   sta891col-0"><Link to={"state/"+val} style={{color:"#6c757d",textDecoration:"none"}}>{Statelist[val]}</Link></div>
                         <div className="sta891col   sta891col-1"><NumberFormat value={reuseStatedata.total.confirmed} displayType={'text'} thousandSeparator={true}/></div>
                         <div className="sta891col   sta891col-2"><NumberFormat value={reuseStatedata.total.tested} displayType={'text'} thousandSeparator={true}/></div>
                         <div className="sta891col   sta891col-3"><NumberFormat value={reuseStatedata.total.recovered} displayType={'text'} thousandSeparator={true}/></div>
                         <div className="sta891col   sta891col-4"><NumberFormat value={reuseStatedata.total.deceased} displayType={'text'} thousandSeparator={true}/></div>
                         <div className="sta891col   sta891col-5"><NumberFormat value={reuseStatedata.total.vaccinated} displayType={'text'} thousandSeparator={true}/></div>                                                                  
                        
                       </li>
                       </div>
                   </ul>
                 </div>
                                            
                  
      })} 
     </>
  )
}



//FUNCTION to show search input

filterInputUI=()=>{
   const statearray=Object.keys(Statelist)
   
     const statemapping=statearray.filter((val,i)=>{
     const value=Statelist[val]
     if(this.state.searchterm==""){
       return ;
     }
     else if(value.toLowerCase().includes(this.state.searchterm.toLowerCase())){
       return (
         <>value</>
         )

     }
   }).map((val,i)=>{
           
         return <Link to={"state/"+val} style={{color:"#6c757d",textDecoration:"none"}}><div className="sta891Box">
                     
                      
                     {Statelist[val]}
                     
                    
                      
                     
              
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