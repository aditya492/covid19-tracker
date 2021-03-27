import React,{Component} from 'react';
import axios from 'axios';
import  {connect } from 'react-redux';      //redux part
import  {fetchCovidData,sortAsc} from '../../store/actions';
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
import {ThemeChanger} from '../../common/themeChanger'

import Calculatedata from '../../utils/Calculatedata';




import 'tachyons';
import State_List from '../../helper/Statelist';
// import {hello} from '../../store/actions';

import './home.css';


class Home extends Component{
constructor(props){
super(props);
this.state={
noti:[],
isAsc:false,
arrowMove:true
}
}


componentDidMount(){
this.props.fetchCovidData()


}




render(){



const{sortBy,isAsc}=this.props.covidData

const reduxData=this.props.covidData
const dataObject=this.props.covidData.dataObject


const setColor=localStorage.getItem('isAsc')
const colorconvert=JSON.parse(setColor)
const setOrder=localStorage.getItem('sortBy')
const convert=JSON.parse(setOrder)

if(!reduxData.error){
return(
<>

<h1 className="sta891MainH1"> <GoAlert/> Corona Outbreak!!! <GoAlert/></h1><span className="sta891MainSpan sta891MainH1 ">Let's Check Data!!</span>
     
      <Sidebar/>

     <Notification/> <ThemeChanger/>

<div style={{marginTop:"12px"}}>
  <h2 className="sta891HomeIndia">India</h2>
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
    <div className="sta891Col sta891Col-0 "  style={   convert==='states' ? {cursor:"pointer",color:"green"} : {cursor:"pointer",color:"red"}} onClick={()=>this.onHeaderClick('states')}>States/UT {'states'===convert && colorconvert?<BsFillCaretUpFill color="green"/>: <BsFillCaretDownFill color="red"/> }</div>
   
    <div className="sta891Col sta891Col-1 " style={  convert==='confirm' ? {cursor:"pointer",color:"green"} : {cursor:"pointer",color:"red"}} onClick={()=>this.onHeaderClick('confirm')}>Confirmed {'confirm'===convert && colorconvert ?<BsFillCaretUpFill color="green"/>: <BsFillCaretDownFill color="red"/> }</div>
    
    <div className="sta891Col sta891Col-2" style={ convert==='tested' ? {cursor:"pointer",color:"green"} : {cursor:"pointer",color:"red"}} onClick={()=>this.onHeaderClick('tested')}>Tested  {'tested'===convert && colorconvert?<BsFillCaretUpFill color="green"/>: <BsFillCaretDownFill color="red"/> }</div>
   
    <div className="sta891Col sta891Col-3" style={  convert==='recover' ? {cursor:"pointer",color:"green"} : {cursor:"pointer",color:"red"}} onClick={()=>this.onHeaderClick('recover')}>Recovered {'recover'===convert && colorconvert ?<BsFillCaretUpFill color="green"/>: <BsFillCaretDownFill color="red"/> }</div>
    
    <div className="sta891Col sta891Col-4" style={  convert==='deceased' ? {cursor:"pointer",color:"green"} : {cursor:"pointer",color:"red"}} onClick={()=>this.onHeaderClick('deceased')}>Deceased {'deceased'===convert && colorconvert?<BsFillCaretUpFill color="green"/>: <BsFillCaretDownFill color="red"/> }</div>
    
    <div className="sta891Col sta891Col-5" style={ convert==='vaccinated' ? {cursor:"pointer",color:"green"} : {cursor:"pointer",color:"red"}} onClick={()=>this.onHeaderClick('vaccinated')}>Vaccinated {'vaccinated'===convert && colorconvert ?<BsFillCaretUpFill color="green"/>: <BsFillCaretDownFill color="red"/> }</div>
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



onHeaderClick=(sortKey)=>{
 
 const{isAsc,sortBy,data,dataObject}=this.props.covidData

 const isAscc=isAsc;

  const reduxData=data
  const dataObj=dataObject

 
  
  if(sortKey==sortBy)
  {   
    return this.props.sortconf(reduxData,sortKey,dataObj,!isAscc)

   
  } 
  else{
        return this.props.sortconf(reduxData,sortKey,dataObj,isAscc)
  } 
 

}




 
//FUNTION TO SHOW DATA
getStateTableUI=()=>{

const reduxData=this.props.covidData.data




return(
<>

{this.props.covidData.loading ? <h1 style={{textAlign:"center"}}><BeatLoader color='white'/></h1> :

reduxData.map((reuseStatedata,i)=>{ 
   
return <Link to={"state/"+reuseStatedata.id} style={{textDecoration:"none"}}>
<ul>
  
  <li className="sta891Statedata_table_row  link dim black b shadow-5" style={{cursor:"pointer"}}>
    
    <div className="sta891Col   sta891Col-0">{State_List[reuseStatedata.id]}</div>
    
    <div className="sta891Col   sta891Col-1">{isNaN(reuseStatedata.confirmed) ? "--" : <NumberFormat value={reuseStatedata.confirmed} displayType={'text'} thousandSeparator={true}/>}</div>
    
    <div className="sta891Col   sta891Col-2">{isNaN(reuseStatedata.tested) ? "--" : <NumberFormat value={reuseStatedata.tested} displayType={'text'} thousandSeparator={true}/>}</div>
    
    <div className="sta891Col   sta891Col-3">{isNaN(reuseStatedata.recovered) ? "--" : <NumberFormat value={reuseStatedata.recovered} displayType={'text'} thousandSeparator={true}/>}</div>
   
    <div className="sta891Col   sta891Col-4">{isNaN(reuseStatedata.deceased) ? "--" : <NumberFormat value={reuseStatedata.deceased} displayType={'text'} thousandSeparator={true}/>}</div>
   
    <div className="sta891Col   sta891Col-5">{isNaN(reuseStatedata.vaccinated) ? "--" :<NumberFormat value={reuseStatedata.vaccinated} displayType={'text'} thousandSeparator={true}/>}</div>
    
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
    sortconf:(final,sortBy,dataObject,isAsc)=>dispatch(sortAsc(final,sortBy,dataObject,isAsc)),
    fetchCovidData:()=>dispatch(fetchCovidData())
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);





