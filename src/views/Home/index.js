import React,{Component} from 'react';
import axios from 'axios';
import  {connect } from 'react-redux';      //redux part
import  {fetchStart,sortAsc} from '../../store/actions';
import {Link} from 'react-router-dom';
import NumberFormat from 'react-number-format';
import {BeatLoader} from 'react-spinners';
import {BsSearch,BsFillCaretDownFill,BsFillCaretUpFill} from "react-icons/bs";
import {GoAlert} from "react-icons/go";
import {RiDeviceRecoverLine} from "react-icons/ri";
import {AiFillMedicineBox} from "react-icons/ai";
import {FcCalendar} from "react-icons/fc";
import {FaArrowAltCircleRight} from "react-icons/fa";
import {GiHypodermicTest,GiConfirmed,GiAbstract033} from "react-icons/gi";
 
import Notification from '../notification';
import Sidebar from '../Sidebar'

import Card from '../../common/Card'
import StateSearchBar from '../../common/StateSearchBar';

import Calculatedata from '../../utils/Calculatedata';
import getCovidData from '../../utils/Storage';


import 'tachyons';
import State_List from '../../helper/Statelist';
// import {hello} from '../../store/actions';

import './home.css';


class Home extends Component{
constructor(props){
super(props);
this.state={
noti:[],
sorted:false,
}
}


componentDidMount(){
this.props.fetchStart()

}

 


render(){

const reduxData=this.props.covidData
const dataObject=this.props.covidData.dataObject
console.log(reduxData);
console.log("props",this.props);
console.log("sortconf",this.props.sortconf)
if(!reduxData.error){
return(
<>

<h1 className="sta891MainH1"> <GoAlert/> Corona Outbreak!!! <GoAlert/></h1><span className="sta891MainSpan sta891MainH1 ">Let's Check Data!!</span>

      <Sidebar/>

     <Notification/>

<div style={{marginTop:"12px"}}>
  <h2 className="sta891HomeIndia" onClick={()=>this.change()}>India</h2>
</div>


 <div className="sta891main001">
  {reduxData.loading ? <h1 style={{textAlign:"center",color:"white"}}><BeatLoader color='white'/></h1> : <Card
  confirmed={reduxData.confirmed}
  tested={reduxData.tested}
  deceased={reduxData.deceased}
  recovered={reduxData.recovered}
  vaccinated={reduxData.vaccinated}
  />}
</div>


<StateSearchBar/>

<div className="sta891CurrentDate"><FcCalendar style={{fontSize:"25px"}}/><span>{this.currentdate()}</span></div>


<div className="sta891color_State_body">
  <li className="sta891Table_Header_ ">
    <div className="sta891Col sta891Col-0" style={{cursor:"pointer"}} onClick={()=>{this.props.sortconf(reduxData.data,'states',dataObject,this.state.sorted);this.changeSorted()}}>States/UT {this.state.sorted ?<BsFillCaretUpFill/>: <BsFillCaretDownFill/> }</div>
    <div className="sta891Col sta891Col-1" style={{cursor:"pointer"}} onClick={()=>{this.props.sortconf(reduxData.data,'confirm',dataObject,this.state.sorted);this.changeSorted()}}>Confirmed {this.state.sorted ?<BsFillCaretUpFill/>: <BsFillCaretDownFill/> }</div>
    <div className="sta891Col sta891Col-2" style={{cursor:"pointer"}} onClick={()=>{this.props.sortconf(reduxData.data,'tested',dataObject,this.state.sorted);this.changeSorted()}}>Tested  {this.state.sorted ?<BsFillCaretUpFill/>: <BsFillCaretDownFill/> }</div>
    <div className="sta891Col sta891Col-3" style={{cursor:"pointer"}} onClick={()=>{this.props.sortconf(reduxData.data,'recover',dataObject,this.state.sorted);this.changeSorted()}}>Recovered {this.state.sorted ?<BsFillCaretUpFill/>: <BsFillCaretDownFill/> }</div>
    <div className="sta891Col sta891Col-4" style={{cursor:"pointer"}} onClick={()=>{this.props.sortconf(reduxData.data,'deceased',dataObject,this.state.sorted);this.changeSorted()}}>Deceased {this.state.sorted ?<BsFillCaretUpFill/>: <BsFillCaretDownFill/> }</div>
    <div className="sta891Col sta891Col-5" style={{cursor:"pointer"}} onClick={()=>{this.props.sortconf(reduxData.data,'vaccinated',dataObject,this.state.sorted);this.changeSorted()}}>Vaccinated {this.state.sorted ?<BsFillCaretUpFill/>: <BsFillCaretDownFill/> }</div>
  </li>
</div>

 

<div style={{marginLeft:"110px"}}>{this.getStateTableUI()}</div>


</>

)
}

else{
     return <h1 style={{textAlign:"center"}}>404 Error Not Found!!</h1>
    }

}


changeSorted=()=>{
  this.setState(previous=>({
      sorted:!previous.sorted
 }))

}


change=()=>{
this.setState(prev=>({
 theme:!prev.theme 
}))
}


 
//FUNTION TO SHOW DATA
getStateTableUI=()=>{

const reduxData=this.props.covidData.data


const StateKey=Object.keys(reduxData)


return(
<>

{this.props.covidData.loading ? <h1 style={{textAlign:"center"}}><BeatLoader color='white'/></h1> :

reduxData.map((reuseStatedata,i)=>{ 
   
return <Link to={"state/"+reuseStatedata.id} style={{textDecoration:"none"}}>
<ul>
  
  <li className="sta891Statedata_table_row  link dim black b shadow-5" style={{cursor:"pointer"}}>
    
    <div className="sta891Col   sta891Col-0">{State_List[reuseStatedata.id]}</div>
    
    <div className="sta891Col   sta891Col-1"><NumberFormat value={reuseStatedata.confirmed} displayType={'text'} thousandSeparator={true}/></div>
    
    <div className="sta891Col   sta891Col-2"><NumberFormat value={reuseStatedata.tested} displayType={'text'} thousandSeparator={true}/></div>
    
    <div className="sta891Col   sta891Col-3"><NumberFormat value={reuseStatedata.recovered} displayType={'text'} thousandSeparator={true}/></div>
   
    <div className="sta891Col   sta891Col-4"><NumberFormat value={reuseStatedata.deceased} displayType={'text'} thousandSeparator={true}/></div>
   
    <div className="sta891Col   sta891Col-5"><NumberFormat value={reuseStatedata.vaccinated} displayType={'text'} thousandSeparator={true}/></div>
    
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





const mapStateToProps=state=>{
return {covidData:state.covidData,};

}

const mapDispatchToProps=(dispatch)=>{
  return{
    sortconf:(final,sortBy,dataObject,toggle)=>dispatch(sortAsc(final,sortBy,dataObject,toggle)),
    fetchStart:()=>dispatch(fetchStart())
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);





